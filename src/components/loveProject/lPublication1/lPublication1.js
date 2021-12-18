import LPStar from './LPStar.vue'
import LReaction from './lReaction/LReaction.vue'
import ListReactor from './listReactor/ListReactor.vue'
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
      default: 'TAMO MBOBDA Eric'
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
    LPStar,
    LReaction,
    ListReactor
  },
  data () {
    return {
      vtext_height: '20px',
      vplus_transform: 'rotate(0deg)',
      full_text_visible: false,
      star_colors: [{ color: 'white' }, { color: 'white' }, { color: 'white' }],
      react: 'react',
      vreaction: 'none',
      reaction_visible: false,
      vreactor: 'none', // list reactor visible or not when comment button clicked
      lr_visible: false // list reactor visible booleen
    }
  },
  methods: {
    slideText () {
      if (!this.full_text_visible) {
        this.vtext_height = '500px'
        this.vplus_transform = 'rotate(45deg)'
      } else {
        this.vtext_height = '20px'
        this.vplus_transform = 'rotate(90deg)'
      }
      this.full_text_visible = !this.full_text_visible
    },
    reactionMenu () {
      this.vreaction = this.reaction_visible ? 'flex' : 'none'
      this.reaction_visible = !this.reaction_visible
    },
    lrMenu () {
      this.vreactor = this.lr_visible ? 'block' : 'none'
      this.lr_visible = !this.lr_visible
    }
  }
}
