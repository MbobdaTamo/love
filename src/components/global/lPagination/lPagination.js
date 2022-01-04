import Slider from './Slider'
export default {
  name: 'lPagination',
  data () {
    return {
      datas: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15},
        {id: 16},
        {id: 17},
        {id: 18},
        {id: 19},
        {id: 20},
        {id: 21},
        {id: 22},
        {id: 23},
        {id: 24},
        {id: 25}
      ],
      datas1: [],
      index: 0, // -- the first index amongs index pages visible
      dataIndex: 0, // the current page
      currentElement: [],
      colors: [
        { bg: '#2057AA', color: 'white' },
        { bg: 'transparent', color: 'inherit' },
        { bg: 'transparent', color: 'inherit' }
      ]
    }
  },
  components: {
    Slider
  },
  methods: {
    splitTable (table, slice) {
      let i
      let j = 0
      let k = 0
      let max = table.length
      let result = []
      let resultElement = []
      for (i = 0; i < max; i++) {
        j++
        resultElement.push(table[i].id)
        if (j === slice) {
          k = i
          result.push(resultElement)
          resultElement = []
          j = 0
        }
      }
      // --- ajoutons le reste des éléments
      resultElement = []
      if (k < slice) k = -1
      for (i = k + 1; i < max; i++) {
        resultElement.push(table[i].id)
      }
      if (resultElement.length > 0) result.push(resultElement)
      return result
    },
    changeIndex (newIndex) {
      this.datasIndex = this.index + newIndex
      this.$root.$emit('pageChanged', this.datas1[this.index + newIndex])
      this.initializeColor(newIndex)
    },
    changeRange (i) {
      this.index += i * 3
      this.changeIndex(0)
      this.$root.$emit('pageChanged', this.datas1[this.index])
      this.datasIndex = this.index
    },
    initializeColor (current) {
      let i
      for (i = 0; i < 3; i++) {
        this.colors[i].bg = 'transparent'
        this.colors[i].color = 'inherit'
      }
      this.colors[current].bg = '#2057AA'
      this.colors[current].color = 'white'
    }
  },
  computed: {
    cPrevious () {
      if (this.index < 3 || this.datas1.length < 1) {
        return 'none'
      }
      return 'block'
    },
    cNext () {
      if (this.index >= this.datas1.length - 3 || this.datas1.length < 1) {
        return 'none'
      }
      return 'block'
    },
    cFirst () {
      if (this.datas1.length < 1 || this.index > this.datas1.length - 1) {
        return 'none'
      }
      return 'block'
    },
    cSecond () {
      if (this.datas1.length < 2 || this.index + 1 > this.datas1.length - 1) {
        return 'none'
      }
      return 'block'
    },
    cThird () {
      if (this.datas1.length < 3 || this.index + 2 > this.datas1.length - 1) {
        return 'none'
      }
      return 'block'
    }
  },
  created () {
    this.datas1 = this.splitTable(this.datas, 4)
  }
}
