import Vue from 'vue'
import Router from 'vue-router'


import TestAxios from '../view/testAxios'
import DeviceComponent from '../components/basis/deviceComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'a/device/findList',
      name:"DeviceComponent",
      component:DeviceComponent
    },
    {
      path:'/api',
      name:'TestAxios',
      component:TestAxios
    }
  ]
})
