import LNavBar from '@/components/global/lNavBar/LNavBar.vue'
import LDropDown from '@/components/global/lDropDown/LDropDown.vue'
import LPublication from '@/components/global/lPublication/LPublication.vue'
import LFooter from '@/components/global/lFooter/LFooter.vue'
export default {
  name: 'profilePage',
  components: {
    LNavBar,
    LDropDown,
    LPublication,
    LFooter
  },
  data () {
    return {
      datas: [
        {name: 'Politic', logo: './images/Ez Abde.jpeg', totalPoint: '188', published: '100K', pointPerPublication: '0.2'},
        {name: 'Politic', logo: './images/Ez Abde.jpeg', totalPoint: '188', published: '100K', pointPerPublication: '0.2'},
        {name: 'Politic', logo: './images/Ez Abde.jpeg', totalPoint: '188', published: '100K', pointPerPublication: '0.2'},
        {name: 'Politic', logo: './images/Ez Abde.jpeg', totalPoint: '188', published: '100K', pointPerPublication: '0.2'},
        {name: 'Politic', logo: './images/Ez Abde.jpeg', totalPoint: '188', published: '100K', pointPerPublication: '0.2'}
      ]
    }
  },
  methods: {
    fieldBgColor (i) {
      return i % 2 === 0 ? 'rgb(255,255,255)' : 'rgb(255,255,255,0.6)'
    }
  }
}
