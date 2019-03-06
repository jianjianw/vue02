<template>
  <div id="app">

    <!--<div style="position:absolute;left:900px;top:0px">-->
    <!--西安音乐学院考试后台管理系统-->
    <!--</div>-->


    <router-view name = "index"/>
    <router-view name = "index02"/>
    <!--<router-view name = "content"/>-->
    <!--<router-view name = "home"/>-->
    <!--<router-view name = "view"/>-->


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.layout-menu-left{
  background: #464c5b;
}
</style>
