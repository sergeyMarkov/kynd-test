<template>
  <div v-if="members.length == 0" class="flex flex-col items-center justify-center h-full px-4 text-center lg:px-16">
		<button v-if="!buttonClicked" @click="handleButtonClick" class="h-12 text-white rounded-2xl w-52 bg-lg bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900">Load Members</button>
		<span v-if="buttonClicked" class="items-center justify-center px-4 text-center lg:px-16">
    		<p>Please wait...</p>
  		</span>
  </div>
  <div v-else class="max-w-screen-xl p-4 mx-auto">
    <div class="mb-4 font-semibold">Found {{ members.length }} members with an average age of {{ averageAge }}</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 members-list">
      <member-card v-for="member in members" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<script lang="ts">
import MemberCard from '@/components/MemberCard.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { Member } from '@/services/members'

@Component({ components: {} })
export default class MemberView extends Vue {
  
  @Action('fetchMembers') fetchMembers!: () => Promise<void>;

  buttonClicked: boolean = false;
  
  get members(): Member[] {
    return this.$store.state.members;
  }

  get averageAge() {
    return this.$store.getters.averageAge;
  }

  handleButtonClick() {
    this.buttonClicked = true;
    this.fetchMembers();
  }
}
</script>
