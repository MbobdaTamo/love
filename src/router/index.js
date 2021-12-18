import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Inscription from '@/components/inscription/Inscription'
import LoveProject from '@/components/loveProject/LoveProject'
import Publication from '@/components/publication/Publication'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription
    },
    {
      path: '/loveProject',
      name: 'loveProject',
      component: LoveProject
    },
    {
      path: '/publication',
      name: 'publication',
      component: Publication
    }
  ]
})
