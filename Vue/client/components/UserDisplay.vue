<template>
  <div class="user-wrapper">
    <div v-if="!editing">
      <p> {{ user.firstName }} </p>
      <p> {{ user.lastName }} </p>
      <p> {{ user.address }} </p>
      <button v-on:click="editing=true"> Manage </button>
    </div>
    <div v-else>
      <input type="text" v-model="updatedUser.firstName" /> <br />
      <input type="text" v-model="updatedUser.lastName" /> <br />
      <input type="text" v-model="updatedUser.address" /> <br />
      <button v-on:click="handleSubmit"> Save </button> <br />
      <button v-on:click="handleCancel"> Cancel </button> <br />
      <button v-on:click="handleDelete"> Delete </button> <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-display',
  data () {
    return {
      editing: false,
      updatedUser: JSON.parse(JSON.stringify(this.user)) // parse and stringify the user from the props to make a copy and avoid manipulating the original user
    }
  },
  methods: {
    handleSubmit: function () {
      const data = {
        firstName: this.updatedUser.firstName,
        lastName: this.updatedUser.lastName,
        address: this.updatedUser.address,
        id: this.updatedUser.id
      }
      this.$store.commit('update_user', data)
      this.editing = false
    },
    handleCancel: function () {
      console.log(this.user)
      this.updatedUser = this.user
      this.editing = false
    },
    handleDelete: function () {
      this.$store.commit('delete_user', this.user.id)
      this.editing = false
    }
  },
  props: ['user']
}
</script>
