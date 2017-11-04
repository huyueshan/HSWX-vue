import Vue from 'vue'
import Router from 'vue-router'
import HomeMain from '../components/page/HomeMain'
import AboutMe from '../components/page/AboutMe'
import Product from '../components/page/Product'
import Contactus from '../components/page/Contactus'
import Zhaopin from '../components/page/Zhaopin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // component: DetailPage,
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'homemain',
      component: HomeMain
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/contactus',
      name: 'Contactus',
      component: Contactus
    },
    {
      path: '/prosuct',
      name: 'Prosuct',
      component: Product
    },
    {
      path: '/zhaopin',
      name: 'zhaopin',
      component: Zhaopin
    }
  ]
})
