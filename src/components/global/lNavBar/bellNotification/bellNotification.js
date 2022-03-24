export default {
  name: 'bellNotification',
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
    getDatas () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getNotification.php', {
        personne: this.$store.state.login.id
      })
        .then((response) => {
          this.datas = response.data
          this.$root.$emit('notificationData', response.data) // to bellNotificationSmall
        })
        .catch((error) => {
          alert(error)
        })
    },
    getUnchecked () { // getting notifications number which have not been checked
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'notificationStatus.php', {
        personne: this.$store.state.login.id
      })
        .then((response) => {
          this.uncheckedNumb = response.data
          this.$root.$emit('notificationUnchecked', response.data) // to bellNotificationSmall
        })
        .catch((error) => {
          alert(error)
        })
    },
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
    this.getDatas()
    this.getUnchecked()
  }
}
