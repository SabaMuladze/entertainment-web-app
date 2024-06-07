
<template>
  <div class="w-full min-h-[100vh] bg-cusdark flex flex-col xl:flex-row">
    <Header v-if="isAuthPath"></Header>
    <router-view>

    </router-view>
  </div>
</template>

<script >
import Header from './components/Header.vue';
export default{
  components:{
Header
  },
  computed: {
    isAuthPath() {
      return this.$route.path != '/auth';
    }
  }
}
</script>

<style>
body{
  
}
</style>