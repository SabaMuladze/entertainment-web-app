
<template>
  <div class="w-full min-h-[100vh] bg-cusdark">
    <router-view>
      <Header></Header>
    </router-view>
  </div>
</template>

<script >
import Header from './components/Header.vue';
export default{
  components:{
Header
  }
}
</script>

<style scoped>
</style>