// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueCountryCode from 'vue-country-code-select'

Vue.use(VueCountryCode)

Vue.use(Vuex)

Vue.config.productionTip = false

/* creating the store ----- */

const store = new Vuex.Store({
  state: {
    count: 0,
    // datas are saved in src/asset
    langDatas: [
      {image: 'flags/Flag_of_UK.svg', name: 'English', emit: 'english'},
      {image: 'flags/Flag_of_Cameroon.svg', name: 'Cameroonian', emit: 'camerounian'},
      {image: 'flags/Flag_of_France.svg', name: 'French', emit: 'french'}
    ],
    sortCommentDatas: [
      {image: 'emoticones/medal.svg', name: 'Latest', emit: 'latest'},
      {image: 'emoticones/medal.svg', name: 'Most point', emit: 'most_point'},
      {image: 'emoticones/heart.svg', name: 'Most love', emit: 'heart'},
      {image: 'emoticones/laughing.svg', name: 'Most funny', emit: 'laughing'},
      {image: 'emoticones/impressed.svg', name: 'Most impressed', emit: 'impressed'},
      {image: 'emoticones/like.svg', name: 'Most like', emit: 'like'},
      {image: 'emoticones/handshake.svg', name: 'Most hanshake', emit: 'handshake'},
      {image: 'emoticones/sad.svg', name: 'Most sad', emit: 'sad'},
      {image: 'emoticones/sick.svg', name: 'Most sick', emit: 'sick'},
      {image: 'emoticones/angry.svg', name: 'Most angry', emit: 'angry'}
    ],
    publiTypeDatas: [
      {image: 'publiType/football1.svg', name: 'Football'},
      {image: 'publiType/philo.svg', name: 'Philosophy'},
      {image: 'publiType/socialProblem.svg', name: 'Social problems'},
      {image: 'publiType/politic.svg', name: 'Politic'},
      {image: 'publiType/beauty.svg', name: 'Beauty'},
      {image: 'publiType/physics.svg', name: 'Physics'},
      {image: 'publiType/other.svg', name: 'Other'}
    ],
    login: {
      connected: false,
      id: 12
    },
    publication: {
      type: 'Football',
      id: 42
    },
    baseUrl: 'http://localhost/projet/datas/',
    // --- pop ups this variable is boolean which decides if when publication component is created should or not display message
    publicationMessage: false
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateLogin (state, playload) {
      state.login.connected = playload.connected
      state.login.id = playload.id
    },
    mutPubliMessage (state, playload) {
      state.publicationMessage = playload
    },
    updatePublication (state, playload) {
      state.publication.type = playload.type
      state.publication.id = playload.id
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
