<template>
  <div class="main-content">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
  .main-content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
