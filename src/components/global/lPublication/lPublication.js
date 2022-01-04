import LPStar from './LPStar.vue'
export default {
  name: 'lPublication',
  props: {
    publication_type: String,
    reference: String,
    id: Number,
    publication_img: {
      type: String,
      default: './images/dembouz.jpg'
    },
    publication_date: {
      type: String,
      default: 'MER. 20.02.2000 '
    },
    publication_author: {
      type: String,
      default: 'TAMO MBOBDA ERIC'
    },
    publication_title: {
      type: String,
      default: 'The LaLiga Experience serves up one of the matches of the season'
    },
    publication_text: {
      type: String,
      default: '\'Saturday\'s Real Sociedad v Real Madrid match was quite the occasion, particularly for the special guests of the second LaLiga Experience 2021/22, who got to enjoy one of the most spectacular games of the year'
    },
    publi_numb_com: {
      type: Number,
      default: 100
    },
    publication_point: {
      type: Number,
      default: 1000
    }
  },
  components: {
    LPStar
  },
  data () {
    return {
      vtext_height: '61px',
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
        this.vtext_height = '61px'
        this.vplus_transform = 'rotate(90deg)'
      }
      this.full_text_visible = !this.full_text_visible
    },
    reactEmit () { /* this signal is emitted for the component lReaction */
      this.$root.$emit('reactClick', this.reference)
    },
    lsReactEmit () { /* this signal is emitted for the component listReactor */
      this.$root.$emit('lsReactClick', 'bonjour')
    }
  },
  mounted () {
    this.$on('reactSelected', data => {
      this.react = data
    })
  }
}
