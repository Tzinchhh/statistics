import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import QuestInfo from '@/components/quest-info'
import NotFound from '@/components/not-found'

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
      name: 'QuestInfo',
      component: QuestInfo
    },
    {
      path: '/main/not-found',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
