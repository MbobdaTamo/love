import LDropDown from '@/components/global/lDropDown/LDropDown.vue'
export default {
  name: 'lPblicationForm',
  components: {
    LDropDown
  },
  data () {
    return {
      Display: 'none',
      isDisplayed: false,
      publiTitle: '',
      publiContent: ''
    }
  },
  methods: {
    displaying () {
      this.Display = this.isDisplayed ? 'none' : 'block'
      this.isDisplayed = !this.isDisplayed
      document.getElementById('lPbblah').src = ''
    },
    preview () {
      const [file] = this.$refs.image.files
      if (file) {
        document.getElementById('lPbblah').src = URL.createObjectURL(file)
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
            console.log(response.data)
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
        axios.post(this.$store.state.baseUrl + 'savePublication.php', {
          publiTitle: this.publiTitle,
          publiContent: this.publiContent,
          type: this.$refs.types.currentType,
          userId: this.$store.state.login.id
        })
          .then((response) => {
            console.log(response.data)
            this.$root.$emit('loading', 'off')
            this.$root.$emit('typeSelected', 'latest') // for Lpagination component
            this.displaying()
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  }
}
