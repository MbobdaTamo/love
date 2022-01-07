import LPStar from './LPStar.vue'
export default {
  name: 'lPublication',
  props: {
    reference: String,
    id: Number
  },
  components: {
    LPStar
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
      vplus_transform: 'rotate(0deg)',
      full_text_visible: false,
      star_colors: [{ color: '#E32D38' }, { color: '#E32D38' }, { color: '#E32D38' }, { color: '#E32D38' }],
      react: 'angry'
    }
  },
  methods: {
    slideText () {
      if (!this.full_text_visible) {
        this.vtext_height = '500px'
        this.vplus_transform = 'rotate(45deg)'
      } else {
        this.vtext_height = '53px'
        this.vplus_transform = 'rotate(90deg)'
      }
      this.full_text_visible = !this.full_text_visible
    },
    reactEmit () { /* this signal is emitted for the component lReaction */
      this.$root.$emit('reactClick', this.reference)
    },
    lsReactEmit () { /* this signal is emitted for the component listReactor */
      this.$root.$emit('lsReactClick', 'bonjour')
    },
    updateDatas () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'publicationDatas.php', {
        id: this.id
      })
        .then((response) => {
          this.publication_text = response.data.texte
          this.publication_title = response.data.titre
          this.publication_type = response.data.type
          this.publication_date = response.data.dat_p
          this.publication_author = (response.data.nom + ' ' + response.data.prenom).toUpperCase()
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted () {
    this.$on('reactSelected', data => {
      this.react = data
    })
  },
  beforeUpdate () {
   // this.updateDatas()
  }
}
