import LPStar from './LPStar.vue'
export default {
  name: 'lPublication1',
  props: {
    publication_type: String,
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
      default: '\'Saturday\'s Real Sociedad v Real Madrid match was quite the occasion, particularly for the. et pourquoi ne pas rendre ce texte encore plus long. Quoi que tu dise ca aura un effet. Et de toute facon ca marche bien'
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
      vtext_height: '113px',
      vplus_transform: 'rotate(0deg)',
      full_text_visible: false,
      star_colors: [{ color: 'white' }, { color: 'white' }, { color: 'white' }],
    }
  },
  methods: {
    slideText () {
      if (!this.full_text_visible) {
        this.vtext_height = '500px'
        this.vplus_transform = 'rotate(45deg)'
      } else {
        this.vtext_height = '113px'
        this.vplus_transform = 'rotate(90deg)'
      }
      this.full_text_visible = !this.full_text_visible
    }
  }
}
