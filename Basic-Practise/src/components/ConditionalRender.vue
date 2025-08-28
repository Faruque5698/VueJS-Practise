<script lang="ts">
  export default {
    data() {
      return {
        isLoggedIn : false,
      }
    },methods:{
      login() {
        console.log('login');
        this.isLoggedIn = true;
      }, logout() {
        console.log('logout');
        this.isLoggedIn = false;
      },
    }
  }
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <button class="btn btn-info" @click="login" v-if="!isLoggedIn">Login</button>
      <button class="btn btn-info" @click="logout" v-if="isLoggedIn">Logout</button>
    </div>
  </div>
</template>

<style scoped>

</style>