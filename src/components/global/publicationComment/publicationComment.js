import LovComOfCom from '@/components/global/lovComment/LovComOfCom.vue'
export default {
  name: 'publicationComment',
  components: {
    LovComOfCom
  },
  props: {
    reference: String,
    id: Number
  },
  data () {
    return {
      publication_type: 'football',
      publication_img: './images/dembouz.jpg',
      publication_date: 'MER. 20.02.2000 ',
      publication_author: 'TAMO MBOBDA ERIC',
      publication_title: 'The LaLiga Experience serves up one of the matches of the season',
      publication_text: '\'Saturday\'s Real Sociedad v Real Madrid match was quite the occasion, particularly for the special guests of the second LaLiga Experience 2021/22, who got to enjoy one of the most spectacular games of the year',
      publi_numb_com: 100,
      publication_point: 1000,
      // ------ other --------
      vtext_height: '53px',
      vdisplay_more: 'flex',
      full_text_visible: false,
      react: 'handshake',
      Display: 'block',
      isDisplayed: 'flase'
    }
  },
  methods: {
    displaying () {
      this.Display = this.isDisplayed ? 'none' : 'block'
      this.isDisplayed = !this.isDisplayed
    },
    slideText () {
      if (!this.full_text_visible) {
        this.vtext_height = '500px'
      } else {
        this.vtext_height = '53px'
      }
      this.full_text_visible = !this.full_text_visible
    },
    reactEmit () { /* this signal is emitted for the component lReaction */
      this.$root.$emit('reactClick', this.reference)
    },
    lsReactEmit () { /* this signal is emitted for the component listReactor */
      this.$root.$emit('lsReactClick', this.id)
    },
    moreVisible (text) {
      if (text > 300) {
        this.vdisplay_more = 'flex'
        this.vtext_height = '53px'
      } else {
        this.vdisplay_more = 'none'
        this.vtext_height = '500px'
      }
    },
    updateDatas () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'publicationDatas.php', {
        id: this.id
      })
        .then((response) => {
          this.getReaction()
          this.getPublicationPoint()
          this.getNumberPubCom()
          this.publication_text = response.data.texte
          this.moreVisible(response.data.texte.length)
          this.publication_title = response.data.titre
          this.publication_type = response.data.type
          this.publication_date = response.data.dat_p
          this.publication_author = (response.data.nom + ' ' + response.data.prenom).toUpperCase()
        })
        .catch((error) => {
          alert(error)
        })
    },
    reactRequest (reaction) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'reactToPublication.php', {
        publication: this.id,
        personne: this.$store.state.login.id,
        reactionType: reaction
      })
        .then((response) => {
          this.getPublicationPoint()
          this.react = reaction
        })
        .catch((error) => {
          alert(error)
        })
    },
    getReaction () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getPubReaction.php', {
        publication: this.id,
        personne: this.$store.state.login.id
      })
        .then((response) => {
          this.react = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    getPublicationPoint () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'publicationPoint.php', {
        publication: this.id
      })
        .then((response) => {
          this.publication_point = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    getNumberPubCom () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'numberPubCom.php', {
        publication: this.id
      })
        .then((response) => {
          this.publi_numb_com = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    toPublication () {
      this.$store.commit('updatePublication', {id: this.id, type: this.publication_type})
      this.$router.push('publication')
    }
  },
  mounted () {
    this.$on('reactSelected', data => {
      this.reactRequest(data)
    })
  },
  watch: {
    id: function (newVal, oldVal) { // watch it
      this.updateDatas()
    }
  }
}
