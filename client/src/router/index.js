import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Id from '@/components/Id'
import No from '@/components/No'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/main/:alias/:globalId',
      name: 'id',
      component: Id
    },
    {
      path: '/main/no',
      name: 'no',
      component: No
    }
  ]
})
