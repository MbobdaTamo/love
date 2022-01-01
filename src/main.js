// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

/* creating the store ----- */

const store = new Vuex.Store({
  state: {
    count: 0,
    langDatas: [
      {image: 'flags/Flag_of_UK.svg', name: 'English'},
      {image: 'flags/Flag_of_Cameroon.svg', name: 'Cameroonian'},
      {image: 'flags/Flag_of_France.svg', name: 'French'}
    ],
    publiTypeDatas: [
      {image: 'publiType/football1.svg', name: 'Football'},
      {image: 'publiType/philo.svg', name: 'Philosophy'},
      {image: 'publiType/socialProblem.svg', name: 'Social problems'},
      {image: 'publiType/politic.svg', name: 'Politic'},
      {image: 'publiType/beauty.svg', name: 'Beauty'},
      {image: 'publiType/physics.svg', name: 'Physics'},
      {image: 'publiType/other.svg', name: 'Other'}
    ]
  },
  mutations: {
    increment (state) {
      state.count++
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
