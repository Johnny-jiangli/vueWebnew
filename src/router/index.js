import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Device from '../views/device'
import System from '../views/System'
import Home from '../views/Home'
import WarningInfo from '../views/WarningInfo'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name:"HelloWorld",
      component:HelloWorld
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/warninginfo',
      component:WarningInfo
    },
    {
      path:'/deploy/device',
      component:Device,
    },
    {
      path:'/system',
      component:System
    }
  ]
})
