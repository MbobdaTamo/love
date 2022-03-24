export default {
  name: 'bellNotificationSmall',
  data () {
    return {
      baseUrl: this.$store.state.baseUrl,
      uncheckedNumb: 0,
      datas: [
        {number: 10, date: '2020', publication: 22, com: 1, comOfCom: 1, texte: 'Je pense que...', status: 0, nom: 'Cheick Anta Diop', image: ''}
      ]
    }
  },
  methods: {
    bgColor (status) {
      if (status === 0) return 'rgba(0,0,0,0.1)'
      else return 'transparent'
    },
    displayNumb (numb) {
      if (numb > 0) return 'flex'
      else return 'none'
    }
  },
  mounted () {
    this.$root.$on('notificationData', data => { // emited from bellNotification component
      this.datas = data
    })
    this.$root.$on('notificationUnchecked', data => { // emited from bellNotification component
      this.uncheckedNumb = data
    })
  }
}
