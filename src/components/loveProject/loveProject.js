import LNavBar from '@/components/global/lNavBar/LNavBar.vue'
import LComment from '@/components/loveProject/lComment/LComment.vue'
import LPublication from '@/components/global/lPublication/LPublication.vue'
import LPublication1 from '@/components/loveProject/lPublication1/LPublication1.vue'
import LProfileCard from '@/components/loveProject/lProfileCard/LProfileCard.vue'
import LRanking from '@/components/loveProject/lRanking/LRanking.vue'
import BestStat from '@/components/loveProject/bestStat/BestStat.vue'
import Slider from '@/components/loveProject/Slider.vue'
import LFooter from '@/components/global/lFooter/LFooter.vue'
import LPblicationForm from '@/components/global/lPblicationForm/LPblicationForm.vue'
import ListReactor from '@/components/global/listReactor/ListReactor.vue'
import LReaction from '@/components/global/lReaction/LReaction.vue'
import LPagination from '@/components/global/lPagination/LPagination.vue'
export default {
  name: 'loveProject',
  props: {
    resp: String
  },
  components: {
    LNavBar,
    LComment,
    LPublication,
    LPublication1,
    LProfileCard,
    LRanking,
    BestStat,
    Slider,
    LFooter,
    LPblicationForm,
    ListReactor,
    LReaction,
    LPagination
  },
  data () {
    return {
      test: 'monTest',
      DisplayPubliForm: 'none',
      publicationIndexes: []
    }
  },
  methods: {
    publiFormDisplaying () {
      this.$refs.publiForm.displaying()
    }
  },
  mounted () {
    this.$root.$on('pageChanged', data => {
      this.publicationIndexes = data
      window.scroll({top: 720, behavior: 'smooth'})
    })
  }
}
