import Vue from 'vue'
import Router from 'vue-router'
import library from '@/views/library'
import countDown from '@/views/Layout/countDown'
import Notice from '@/views/Layout/Notice'


Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'library',
      component: library
    },
    {
      path: '/countDown',
      name: 'countDown',
      component: countDown
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    }
  ]
})
