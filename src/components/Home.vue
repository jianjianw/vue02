<template>

  <div>
    <router-link  to="/content">跳转到content</router-link>
    <p>{{message}}</p>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            message:"这是一个home组件"
          }
        },
        mounted(){
          this.axios.get("http://jsonplaceholder.typicode.com/users").then(body => {
            this.message = body.data;
          })

        }
    }
</script>

<style scoped>

</style>
