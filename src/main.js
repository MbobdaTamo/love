// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueCountryCode from 'vue-country-code-select'
import ImageUploader from 'vue-image-upload-resize'

Vue.use(ImageUploader)

Vue.use(VueCountryCode)

Vue.use(Vuex)

Vue.config.productionTip = false

/* creating the store ----- */

const store = new Vuex.Store({
  state: {
    count: 0,
    // datas are saved in src/asset
    langDatas: [
      {image: 'flags/Flag_of_UK.svg', name: 'English'},
      {image: 'flags/Flag_of_Cameroon.svg', name: 'Cameroonian'},
      {image: 'flags/Flag_of_France.svg', name: 'French'}
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
      {image: 'publiType/Football.svg', name: 'Football'},
      {image: 'publiType/Philosophy.svg', name: 'Philosophy'},
      {image: 'publiType/Social problems.svg', name: 'Social problems'},
      {image: 'publiType/Politic.svg', name: 'Politic'},
      {image: 'publiType/Beauty.svg', name: 'Beauty'},
      {image: 'publiType/Physics.svg', name: 'Physics'},
      {image: 'publiType/Other.svg', name: 'Other'}
    ],
    // data for the dropdown of profilePage
    PPDatas: [
      {image: 'emoticones/heart.svg', name: 'Owner publications', emit: 'mypub'},
      {image: 'emoticones/laughing.svg', name: 'Owner reacted at', emit: 'reacted'}
    ],
    profilePageId: 18,
    login: {
      connected: false,
      id: 21
    },
    publication: {
      type: 'Football',
      id: 42
    },
    baseUrl: 'http://localhost/projet/datas/',
    // baseUrl: 'https://arnaque9330.000webhostapp.com/projet/datas/',
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
    },
    updateProfilePage (state, playload) {
      state.profilePageId = playload
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
