<template>
	<div class="user-profile" :style="{ backgroundColor: calculateBackgroundColor(userInitials) }">
	  <img v-if="userImage" :src="userImage" alt="User Profile" class="profile-image" />
	<div v-else class="letter-avatar">{{ userAvatarInitials }}</div>
</div>
</template>
  
<script>
import { mapInitialsToHexColour } from '@/utils/colours';

export default {
	props: {
		userImage: {
		type: String,
		default: null,
		},
		userFirstName: {
		type: String,
		required: true,
		},
		userLastName: {
		type: String,
		required: true,
		},
	},
	computed: {
		userInitials() {
		return this.userFirstName.charAt(0) + this.userLastName.charAt(0).toUpperCase();
		},
		userAvatarInitials() {
		return this.userInitials.split('').join(' ');
		}
	},
	methods: {
		calculateBackgroundColor(initials) {
			return mapInitialsToHexColour(initials);
		},
	}
};
</script>
  
  <style scoped>
  .user-profile {
	position: relative;
	width: 64px; /* Adjust the size as needed */
	height: 64px;
	border-radius: 50%;
	overflow: hidden;
  }
  
  .profile-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
  }
  
  .letter-avatar {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	font-size: 1.5rem;
	color: #ffffff; /* You can customize the text color */
  }
  </style>
  