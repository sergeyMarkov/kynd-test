<template>
  <div id="app" class="flex flex-col items-center h-screen lg:flex-col-reverse">    
    <div class="relative flex-1 w-full overflow-auto">
      <router-view />
    </div>
    <navigation-menu />
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'

export default {
  components: {
    'navigation-menu': NavigationMenu
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
