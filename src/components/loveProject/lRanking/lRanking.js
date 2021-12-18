export default {
  name: 'lRanking',
  data () {
    return {
      datas: [
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200}
      ]
    }
  },
  methods: {
    bgColor (i) {
      return i % 2 === 0 ? '#254150' : 'transparent'
    },
    bdColor (i) {
      return i <= 3 ? '#008389'
        : i <= 5 ? '#F5BE01'
          : i <= 6 ? '#654EA3'
            : 'transparent'
    }
  }
}
