export default {
  name: 'lProfileCard',
  data () {
    return {
      datas: [
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200},
        {image: './profile.svg', name: 'Football', point: 200}
      ]
    }
  },
  methods: {
    bgColor (i) {
      return i % 2 === 0 ? 'transparent' : 'transparent' /* '#10202A' */
    },
    textColor (i) {
      return i % 2 === 0 ? 'rgb(36, 39, 41)' : 'rgb(36, 39, 41)' /* '#10202A' */
    }
  }
}
