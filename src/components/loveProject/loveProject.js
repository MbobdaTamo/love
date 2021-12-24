import LNavBar from '@/components/loveProject/lNavBar/LNavBar.vue'
import LComment from '@/components/loveProject/lComment/LComment.vue'
import LPublication from '@/components/loveProject/lPublication/LPublication.vue'
import LPublication1 from '@/components/loveProject/lPublication1/LPublication1.vue'
import LProfileCard from '@/components/loveProject/lProfileCard/LProfileCard.vue'
import LRanking from '@/components/loveProject/lRanking/LRanking.vue'
import BestStat from '@/components/loveProject/bestStat/BestStat.vue'
import Slider from '@/components/loveProject/Slider.vue'
import LFooter from '@/components/loveProject/lFooter/LFooter.vue'
export default {
  name: 'loveProject',
  components: {
    LNavBar,
    LComment,
    LPublication,
    LPublication1,
    LProfileCard,
    LRanking,
    BestStat,
    Slider,
    LFooter
  },
  methods: {
    testAjax () {
      var xhttp = new XMLHttpRequest()
      xhttp.open('GET', 'http://localhost/projet/onlineSite/p_register.php')
      xhttp.onreadystatechange = function () {
        alert(this.responseText)
        alert(this.getResponseHeader('content-length'))
        alert(this.status)
      }
      xhttp.send(null)
    }
  }
}
