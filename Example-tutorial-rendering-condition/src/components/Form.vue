<script lang="ts">

export default {
  data(){
    return{
      errors: {
        email: null,
        password: null,
      },

    }
  },
  methods:{
    formValidation(){
      this.errors.email = "Invalid email";
      this.errors.password = "Invalid password";
      // if (!this.errors) {
      //   this.errors = "Incorrect username and password";
      // }else{
      //   this.errors = null;
      // }
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="container col-8 col-md-6 col-lg-4">
      <div class="card shadow">
        <div class="card-header text-center">Sign In</div>
        <div class="card-body">
<!--          <div class="text-danger" v-if="errors">{{errors}}</div>-->
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text text-danger" v-if="errors.email">{{errors.email}}</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
              <div id="emailHelp" class="form-text text-danger" v-if="errors.password">{{errors.password}}</div>
            </div>
<!--            <div class="mb-3 form-check">-->
<!--              <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--              <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
<!--            </div>-->
            <button @click="formValidation" type="button" class="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>