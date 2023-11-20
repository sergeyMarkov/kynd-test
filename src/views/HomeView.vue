<template>
  <div class="flex flex-col items-center justify-center h-full px-4 text-center lg:px-16">
    <img 
      src="../assets/kynd-1.svg"
      class="w-1/2 lg:w-1/3"
    >
    <p class="mt-12 text-lg font-semibold lg:text-2xl">
      {{ title }}
    </p>

    <p class="mt-4">
      Completed by <a href="https://www.linkedin.com/in/sergeymarkov/" target="_blank">Sergey Markov</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

@Component({})
export default class HomeView extends Vue {
  @State('title')
  private readonly title!: string

}
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>