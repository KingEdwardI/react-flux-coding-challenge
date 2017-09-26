<template>
  <div class="user-wrapper">
    <div v-if="!users.length">
      <p> Please add users for display </p>
    </div>
    <div v-else v-for="user in users">
      <user-display :user="user" :key="user.id"></user-display>
    </div>
  </div>
</template>

<script>
import UserDisplay from '@cmp/UserDisplay'

export default {
  name: 'display-users',
  computed: {
    users () { return this.$store.state.users }
  },
  components: {
    UserDisplay
  }
}
</script>

<style scoped>
.user-wrapper {
 display:flex;
 flex-wrap: wrap;
}
