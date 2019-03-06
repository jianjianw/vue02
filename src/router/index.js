import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Home from '@/components/Home'
import View from '@/components/View'
import Index from '@/components/Index'

Vue.use(Router)

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
    },
    {
      path:'/index',
      name:'index',
      components:{
        index:Index
      }
    }
  ],
  mode: "history"
})
