<!-- MemberCard.vue -->
<template>
	<div class="flex-shrink-0 w-full p-4 bg-white border border-gray-300 shadow-md rounded-2xl md:w-auto">
	  <div class="flex items-center">
		<user-profile-image :userFirstName="member.firstName" :userLastName="member.lastName" />
		<div class="ml-6">
		  <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ member.firstName + ' ' + member.lastName }}</h5>
		  <span class="text-sm text-gray-500 dark:text-gray-400">{{ member.memberSince }}</span>
		</div>
	  </div>
	  <div class="flex flex-col mt-4 overflow-hidden">
		<div class="line-clamp-2">{{ member.lastMessage }}</div>
	  </div>
	</div>
  </template>
  
<script lang="ts">
  import UserProfileImage from '@/components/UserProfileImage.vue'
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Member } from '@/services/members';
  
  @Component({
	components: {
	  UserProfileImage
	}
  })
  export default class MemberCard extends Vue {
	@Prop({ type: Object, required: true }) member!: Member;
  }
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  