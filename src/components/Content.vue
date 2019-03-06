<template>
  <div>
    <router-link  to="/home">跳转到home</router-link>

    <p>{{message}}</p>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        message:"这是一个content组件"
      }
    }
  }



</script>

<style scoped>

</style>
