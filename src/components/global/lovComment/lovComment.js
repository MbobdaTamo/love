
export default {
  name: 'lovComment',
  props: {
    reference: String,
    id: Number
  },
  data () {
    return {
      Display: 'none',
      publication_img: './images/dembouz.jpg',
      publication_date: 'MER. 20.02.2000 ',
      publication_author: 'TAMO MBOBDA ERIC',
      publication_text: '\'Saturday\'s Real Sociedad v Real Madrid match was quite the occasion, particularly for the special guests of the second LaLiga Experience 2021/22, who got to enjoy one of the most spectacular games of the year',
      publi_numb_com: 100,
      publication_point: 1000,
      // ------ other --------
      vtext_height: '53px',
      vdisplay_more: 'flex',
      full_text_visible: false,
      star_colors: [{ color: '#E32D38' }, { color: '#E32D38' }, { color: '#E32D38' }, { color: '#E32D38' }],
      react: 'handshake'
    }
  },
  methods: {
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
      this.$root.$emit('lsReactComClick', this.id)
    },
    commentEmit () { /* this signal is emitted for the component listReactor */
      this.$root.$emit('commentEmit', this.id)
    },
    updateDatas () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'commentDatas.php', {
        id: this.id
      })
        .then((response) => {
          this.getReaction()
          this.getPublicationPoint()
          this.publication_text = response.data.texte
          this.moreVisible(response.data.texte.length)
          this.publication_type = response.data.type
          this.publication_date = response.data.dat_commentaire
          this.publication_author = (response.data.nom + ' ' + response.data.prenom).toUpperCase()
        })
        .catch((error) => {
          alert(error)
        })
    },
    reactRequest (reaction) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'reactToPublication.php', {
        commentaire: this.id,
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
      axios.post(this.$store.state.baseUrl + 'getComReaction.php', {
        commentaire: this.id,
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
      axios.post(this.$store.state.baseUrl + 'commentPoint.php', {
        commentaire: this.id
      })
        .then((response) => {
          this.publication_point = response.data
        })
        .catch((error) => {
          alert(error)
        })
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
    exist (a) {
      if (typeof a === 'undefined') {
        return false
      } else { return true }
    }
  },
  mounted () {
    this.$on('reactSelected', data => {
      this.reactRequest(data)
    })
  },
  watch: {
    id: function (newVal, oldVal) { // watch it
      if (this.exist(newVal)) {
        this.Display = 'block'
        this.updateDatas()
      } else this.Display = 'none'
    }
  }
}
