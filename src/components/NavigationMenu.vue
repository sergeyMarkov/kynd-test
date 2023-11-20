<template>
	<nav class="flex-none w-full text-center">
	  <router-link to="/">Home</router-link> |
	  <router-link to="/members">Members</router-link> |
	  <router-link to="/about">About</router-link>
	</nav>
</template>

<script lang="ts">
export default {
}
</script>
  
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>