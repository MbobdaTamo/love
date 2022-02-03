export default {
  name: 'pComment',
  data () {
    return {
      Display: 'none',
      isDisplayed: true,
      texte: '',
      type: 'Football',
      callerId: 42
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
        axios.post(this.$store.state.baseUrl + 'saveComment.php', {
          texte: this.texte,
          type: this.type,
          publication: this.$store.state.publication.id,
          personne: this.$store.state.login.id
        })
          .then((response) => {
            alert('success' + response.data)
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  },
  mounted () {
    this.$root.$on('commenterPubEmit', data => {
      this.callerId = data
      this.displaying()
    })
  }
}
