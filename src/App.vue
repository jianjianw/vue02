<template>
  <div id="app">
    <div style="position:absolute;left:600px;top:0px">
      我想倡议
    </div>
    <router-view name = "content"/>
    <router-view name = "home"/>
    <router-view name = "view"/>
    <router-view name = "index"/>

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
</style>
