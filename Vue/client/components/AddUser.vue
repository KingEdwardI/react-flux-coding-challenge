<template>
  <div class="user-wrapper">
    <form v-on:submit="handleSubmit($event)">
      <input type="text" placeholder="First Name" v-model="firstName" /> <br />
      <input type="text" placeholder="Last Name" v-model="lastName" /> <br />
      <input type="text" placeholder="Address" v-model="address" /> <br />
      <input type="submit" value="submit" /> 
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      id: 0
    }
  },
  methods: {
    handleSubmit (evt) {
      evt.preventDefault()
      this.id += 1
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        id: this.id
      }
      this.$store.commit('add_user', data)
    }
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
