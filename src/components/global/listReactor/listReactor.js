export default {
  name: 'listReactor',
  data () {
    return {
      datas: [
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'like'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'angry'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'handshake'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'sick'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'laughing'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'sad'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'impressed'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'impressed'},
        {profile: './profile.svg', name: 'TAMO MBOBDA', emoji: 'impressed'}
      ],
      Display: 'none',
      isDisplayed: false
    }
  },
  mounted () {
    this.$root.$on('lsReactClick', data => {
      this.Display = this.isDisplayed ? 'none' : 'block'
      this.isDisplayed = !this.isDisplayed
    })
  }
}
