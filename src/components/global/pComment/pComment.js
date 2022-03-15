export default {
  name: 'pComment',
  data () {
    return {
      Display: 'none',
      isDisplayed: false,
      texte: '',
      type: 'Football',
      callerId: 42,
      serverPage: ''
    }
  },
  methods: {
    displaying () {
      this.Display = this.isDisplayed ? 'none' : 'block'
      this.isDisplayed = !this.isDisplayed
    },
    preview () {
      const [file] = this.$refs.image.files
      if (file) {
        document.getElementById('pCImage').src = URL.createObjectURL(file)
      }
    },
    sendImage () {
      this.$root.$emit('loading', 'on')
      const axios = require('axios')
      var formData = new FormData()
      const [file] = this.$refs.image.files
      if (file) {
        formData.append('image', file)
        axios.post(this.$store.state.baseUrl + 'saveImage.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((response) => {
            alert(response.data)
            this.publishing() // on publi après avoir enregistré l'image
          })
          .catch((error) => {
            alert(error)
          })
      } else { this.publishing() } // s'il n(y a pas de fichier on publi quand meme le reste)
    },
    validation () {
      return true
    },
    publishing () {
      if (!this.validation()) alert('echec de validation')
      else {
        const axios = require('axios')
        axios.post(this.$store.state.baseUrl + this.serverPage, {
          texte: this.texte,
          type: this.$store.state.publication.type,
          publication: this.callerId,
          personne: this.$store.state.login.id,
          parent: this.$store.state.publication.id
        })
          .then((response) => {
            console.log('success' + response.data)
            if (this.serverPage === 'saveComOfCom.php') this.$root.$emit('loadPagination') // emitted for comPagination
            else this.$root.$emit('typeSelected', 'latest')
            this.displaying()
            this.$root.$emit('loading', 'off')
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  },
  mounted () {
    this.$root.$on('commenter', data => {
      this.callerId = data.id
      if (data.type === 'comment') {
        this.serverPage = 'saveComment.php'
      }
      if (data.type === 'comOfcom') {
        this.serverPage = 'saveComOfCom.php'
      }
      this.displaying()
    })
  }
}
