<template>
  <div class="page">
    <h1> Add User
      <span v-if="!isAddingUser" v-on:click="isAddingUser=true"> + </span>
      <span v-else v-on:click="isAddingUser=false"> - </span>
    </h1>
    <add-user v-if="isAddingUser"></add-user>
    <hr />
    <display-users></display-users>
  </div>
</template>

<script>
import AddUser from '@cmp/AddUser'
import DisplayUsers from '@cmp/DisplayUsers'

export default {
  components: {
    AddUser,
    DisplayUsers
  },
  data () {
    return {
      isAddingUser: false,
    }
  }
}
</script>
