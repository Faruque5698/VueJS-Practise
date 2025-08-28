<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      inputText: '',
      isLoggedIn: false,
      names: ['Ashad', "Mim", 'Rifat', 'Sifat'],
      isOk : true
    }
  }, methods: {
    increment() {
      this.count++
    }, decrement() {
      this.count--
    }, showAlert() {
      alert('This is a warning of click alert');
    }, login() {
      console.log('login');
      this.isLoggedIn = true;
    }, logout() {
      console.log('logout');
      this.isLoggedIn = false;
    },changeClass(){
      if (this.isOk){
        this.isOk = false;
      }else{
        this.isOk = true;
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class=" py-5 d-flex justify-content-center">
      <div class="d-flex align-items-center gap-3">
        <!-- Minus Button -->
        <button @click="decrement" class="btn btn-danger">-</button>

        <!-- Counter Value -->
        <h2 id="value" class="mb-0">{{ count }}</h2>

        <!-- Plus Button -->
        <button @click="increment" class="btn btn-success">+</button>
      </div>
    </div>
    <div class="py-5 d-flex justify-content-center">
      <div class="row">
        <button class="btn btn-info" @click="showAlert">Click for alert</button>
        <input type="text" class="form-control mt-2 mb-2" v-model="inputText"> <br>
        <h3>{{ inputText }}</h3>
      </div>

    </div>
    <div class="py-5 d-flex justify-content-center">
      <div class="row">
        <button class="btn btn-info" @click="login" v-if="!isLoggedIn">Login</button>
        <button class="btn btn-info" @click="logout" v-if="isLoggedIn">Logout</button>
        <ul>
          <li v-for="name in names">{{ name }}</li>
        </ul>
        <button class="btn btn-info" @click="changeClass" :class="isOk ? 'btn-primary' : 'btn-danger'">Button</button>/
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>