<template>
  <div class="max-w-screen-xl p-4 mx-auto">
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold header">About My Project</p>

    <p class="mt-4">
      Improvements:
      <ul>
        <li><b>Separation of Concerns</b>: extracted main menu from `App.vue` into separate `Navigation` component</li>
        <li>Instead of showing <b>member for xx` days</b>, I show this information in more elegant way and utilize formatDistanceToNow function from `date-fns` module.</li>
        <li>While we wait for 2 seconds before fetching the data, I display a 'Please wait...' message during this waiting period.</li>
        <li>I have updated necessary libraries by running `yarn outdated`</li>
        <li>I have added Jest unit tests (with 100% coverage)</li>
      </ul>
    </p> 
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})
export default class AboutView extends Vue {
}
</script>

<style scoped>
ul {
  list-style: circle;
}
ul li {
  margin-left: 1rem;
}
</style>