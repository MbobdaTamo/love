import LNavBar from '@/components/global/lNavBar/LNavBar.vue'
import LPublication from '@/components/global/lPublication/LPublication.vue'
import LDropDown from '@/components/global/lDropDown/LDropDown.vue'
import LFooter from '@/components/global/lFooter/LFooter.vue'
import ListReactor from '@/components/global/listReactor/ListReactor.vue'
import LReaction from '@/components/global/lReaction/LReaction.vue'
import LPagination from '@/components/global/lPagination/LPagination.vue'
export default {
  name: 'publiList',
  components: {
    LNavBar,
    LPublication,
    LDropDown,
    LFooter,
    ListReactor,
    LReaction,
    LPagination
  },
  data () {
    return {
      publicationIndexes: [],
      elements: [0, 1, 2, 3]
    }
  },
  methods: {
    exist (a) {
      if (typeof a === 'undefined') {
        return []
      } else { return a }
    }
  },
  mounted () {
    this.$root.$on('pageChanged', data => {
      // emitted from pubPagination
      this.publicationIndexes = this.exist(data)
      window.scrollTo(0, 0)
    })
  }
}
