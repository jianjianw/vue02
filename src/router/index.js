import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Home from '@/components/Home'
import View from '@/components/View'

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
        home:Home,
        content:Content,
        view:View
      }
    }
  ],
  mode: "history"
})
