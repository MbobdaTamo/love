import LNavBar from '@/components/global/lNavBar/LNavBar.vue'
import PComment from '@/components/global/pComment/PComment.vue'
import LDropDown from '@/components/global/lDropDown/LDropDown.vue'
import LovComment from '@/components/global/lovComment/LovComment.vue'
import LFooter from '@/components/global/lFooter/LFooter.vue'
import ListReactor from '@/components/global/listReactor/ListReactor.vue'
import ListReactorCom from '@/components/global/listReactor/ListReactorCom.vue'
import LReaction from '@/components/global/lReaction/LReaction.vue'
import PubPagination from '@/components/global/lPagination/PubPagination.vue'
import PublicationComment from '@/components/global/publicationComment/PublicationComment.vue'
import PReaction from './PReaction'
export default {
  name: 'publication',
  components: {
    LNavBar,
    PComment,
    LDropDown,
    LFooter,
    LovComment,
    ListReactor,
    ListReactorCom,
    LReaction,
    PubPagination,
    PublicationComment,
    PReaction
  },
  data () {
    return {
      publicationIndexes: [],
      publication_type: 'football',
      publication_img: './images/Ez Abde dribbling.jpg',
      publication_date: 'MER. 20.02.2000 ',
      publication_author: 'Tamo Mbobda Eric',
      publication_title: 'The LaLiga Experience serves up one of the matches of the season',
      publication_text: '\'Saturday\'s Real Sociedad v Real Madrid match was quite the occasion, particularly for the special guests of the second LaLiga Experience 2021/22, who got to enjoy one of the most spectacular games of the year',
      publi_numb_com: 100,
      publication_point: 1000,
      react: 'handshake'
    }
  },
  methods: {
    updateDatas () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'publicationDatas.php', {
        id: this.$store.state.publication.id
      })
        .then((response) => {
          this.getReaction()
          this.getPublicationPoint()
          this.getNumberPubCom()
          this.publication_text = response.data.texte
          this.publication_title = response.data.titre
          this.publication_type = response.data.type
          this.publication_date = response.data.dat_p
          this.publication_author = response.data.nom + ' ' + response.data.prenom
        })
        .catch((error) => {
          alert(error)
        })
    },
    reactRequest (reaction) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'reactToPublication.php', {
        publication: this.$store.state.publication.id,
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
        publication: this.$store.state.publication.id,
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
        publication: this.$store.state.publication.id
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
        publication: this.$store.state.publication.id
      })
        .then((response) => {
          this.publi_numb_com = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    reactEmit () { /* this signal is emitted for the component lReaction */
      this.$root.$emit('reactClick', 'pReaction')
    },
    lsReactEmit () { /* this signal is emitted for the component listReactor */
      this.$root.$emit('lsReactClick', this.$store.state.publication.id)
    },
    commenterPubEmit () { /* this signal is emitted for the component pComment */
      this.$root.$emit('commenterPubEmit', this.$store.state.publication.id)
    },
    exist (a) {
      if (typeof a === 'undefined') {
        return []
      } else { return a }
    }
  },
  mounted () {
    this.updateDatas()
    this.$on('reactSelected', data => {
      this.reactRequest(data)
    })
    this.$root.$on('pageChanged', data => {
      this.publicationIndexes = this.exist(data)
      window.scrollTo(0, 700)
    })
  }
}
