import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Home from '@/components/Home'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.$ajax = axios

export default new Router({
  routes: [
    {
      path : '/content',
      name : 'Content',
      component :  Content
    },
    {
      path : '/home',
      name : 'Home',
      component : Home
    }
  ],
  mode: "history"
})
