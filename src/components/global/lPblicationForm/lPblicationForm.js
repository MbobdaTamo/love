import LDropDown from '@/components/global/lDropDown/LDropDown.vue'
export default {
  name: 'lPblicationForm',
  components: {
    LDropDown
  },
  data () {
    return {
      Display: 'none',
      isDisplayed: false
    }
  },
  methods: {
    displaying () {
      this.Display = this.isDisplayed ? 'block' : 'none'
      this.isDisplayed = !this.isDisplayed
    }
  }
}
