import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todolist from '@/components/todo'
import Inscription from '@/components/inscription/Inscription'
import Inscription1 from '@/components/inscription/Inscription1'
import LoveProject from '@/components/loveProject/LoveProject'
import Publication from '@/components/publication/Publication'
import PubliList from '@/components/publiList/PubliList'
import ProfilePage from '@/components/profilePage/ProfilePage'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/inscription1',
      name: 'inscription1',
      component: Inscription1
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
    },
    {
      path: '/publiList',
      name: 'publiList',
      component: PubliList
    },
    {
      path: '/profilePage',
      name: 'profilePage',
      component: ProfilePage
    }
  ]
})
