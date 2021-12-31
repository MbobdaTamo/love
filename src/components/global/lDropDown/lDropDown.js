export default {
  name: 'lDropDown',
  props: {
    bdColor: {
      type: String,
      default: 'solid 1px silver'
    },
    maxHeight: {
      type: String,
      default: '300%'
    },
    maxWidth: {
      type: String,
      default: '120px'
    }
  },
  data () {
    return {
      datas: [
        {image: './images/Flag_of_UK.svg', name: 'English'},
        {image: './images/Flag_of_Cameroon.svg', name: 'Cameroonian'},
        {image: './images/Flag_of_France.svg', name: 'French'},
      ],
      currentImage: './images/Flag_of_UK.svg',
      vheight: '0%',
      vpaddingTop: '0px',
      vpaddingBottom: '0px',
      isCollapsed: false
    }
  },
  methods: {
    heightCollapse () {
      this.vheight = this.isCollapsed ? '0%' : this.maxHeight
      this.vpaddingTop = this.isCollapsed ? '0px' : '5px'
      this.vpaddingBottom = this.vpaddingTop
      this.isCollapsed = !this.isCollapsed
    },
    selecting (index) {
      this.currentImage = this.datas[index].image
      this.heightCollapse()
    }
  }
}
