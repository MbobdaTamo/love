export default {
  name: 'updatePubForm',
  data () {
    return {
      Display: 'none',
      isDisplayed: false,
      description: '',
      noModif: { cover: '( aucunes modifications)', profile: '( aucunes modifications)' }
    }
  },
  methods: {
    displaying () {
      this.Display = this.isDisplayed ? 'none' : 'block'
      this.isDisplayed = !this.isDisplayed
    },
    cancel () {
      document.getElementById('upFcover').src = ''
      document.getElementById('upFprofile').src = ''
      this.description = this.$parent.pseudo
      this.noModif['cover'] = '( aucunes modifications)'
      this.noModif['profile'] = '( aucunes modifications)'
    },
    preview (type) {
      const [file] = this.$refs[type].files
      if (file) {
        document.getElementById('upF' + type).src = URL.createObjectURL(file)
        this.noModif[type] = ''
      }
    },
    sendImage (type) {
      let serverPage = 'saveImage.php'
      if (type === 'cover') serverPage = 'saveImage1.php'
      else this.$root.$emit('loading', 'on')

      // axios request
      const axios = require('axios')
      var formData = new FormData()
      const [file] = this.$refs[type].files
      if (file) {
        formData.append('image', file)
        axios.post(this.$store.state.baseUrl + serverPage, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((response) => {
            console.log(response.data)
            if (type === 'profile') this.sendImage('cover')
            else this.publishing() // on publi après avoir enregistré l'image
          })
          .catch((error) => {
            alert(error)
          })
      } else {
        if (type === 'profile') this.sendImage('cover')
        else this.publishing()
      } // s'il n(y a pas de fichier on publi quand meme le reste)
    },
    validation () {
      return true
    },
    publishing () {
      if (!this.validation()) alert('echec de validation')
      else {
        const axios = require('axios')
        axios.post(this.$store.state.baseUrl + 'updateUser.php', {
          id: this.$store.state.login.id,
          description: this.description
        })
          .then((response) => {
            console.log(response.data)
            this.$parent.getUserDatas()
            this.cancel()
            this.displaying()
            this.$root.$emit('loading', 'off')
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  }
}
