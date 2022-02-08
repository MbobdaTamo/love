import LovComOfCom from '@/components/global/lovComment/LovComOfCom.vue'
import ComPagination from '@/components/global/lPagination/ComPagination.vue'
import ComLReaction from '@/components/global/lReaction/ComLReaction.vue'
import ListReactorComOfCom from '@/components/global/listReactor/ListReactorComOfCom.vue'
export default {
  name: 'publicationComment',
  props: {
    reference: String
  },
  components: {
    LovComOfCom,
    ComPagination,
    ComLReaction,
    ListReactorComOfCom
  },
  data () {
    return {
      id: 12,
      publicationIndexes: [],
      publication_type: 'football',
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
      react: 'handshake',
      Display: 'none',
      isDisplayed: false
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
      this.$root.$emit('lsReactComClick', this.id)
    },
    comOfComEmit () { /* this signal is emitted for the component listReactor */
      this.$root.$emit('commenter', {id: this.id, type: 'comOfcom'})
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
      axios.post(this.$store.state.baseUrl + 'commentDatas.php', {
        id: this.id
      })
        .then((response) => {
          this.getReaction()
          this.getPublicationPoint()
          this.getNumberComCom()
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
      axios.post(this.$store.state.baseUrl + 'reactToComment.php', {
        commentaire: this.id,
        personne: this.$store.state.login.id,
        reactionType: reaction,
        type: this.$store.state.publication.type
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
    getNumberComCom () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'numberComCom.php', {
        parent_comment: this.id
      })
        .then((response) => {
          this.publi_numb_com = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    exist (a) {
      if (typeof a === 'undefined') {
        return []
      } else { return a }
    }
  },
  mounted () {
    this.$on('reactSelected', data => {
      this.reactRequest(data)
    })
    this.$root.$on('commentEmit', data => {
      this.id = data
      this.$refs.pagination.$emit('loadPagination') // emitted for ComPagination
      this.updateDatas()
      this.displaying()
    })
    this.$root.$on('comPageChanged', data => {
      this.publicationIndexes = this.exist(data)
      // this.scrollTo(0, 700)
      let c = document.querySelector('.pubComComZone')
      c.scrollTo(0, 0)
    })
  }
}
