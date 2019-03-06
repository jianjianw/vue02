<template>

  <div>
    <Slider v-model="value" range></Slider>
    <p>name</p>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        value: [20, 50]
      }
    }
  }
</script>

<style scoped>

</style>
