<script>
import InputField from "@/components/InputField.vue";
import InputFieldV2 from "@/components/InputFieldV2.vue";
import InputFieldV3 from "@/components/InputFieldV3.vue";
import Footer from "@/components/Footer.vue";
import {computed} from "vue";

export default {
  components: {
    InputField,
    InputFieldV2,
    InputFieldV3,
    Footer
  },
  data() {
    return {
      msg: '',
      msgV2: '',
      name:'',
      email:'',
      password:'',
      textMessage:'Resdfasdf'

    }
  },
  updated() {
    // this.textMessage = 'My name is ' + this.name + ', email is ' + this.email + ' and password is ' + this.password;
  },
  // provide:{
  //   message:'Hello from App.vue'
  // }
  provide(){
    return {
      message: computed(() => this.textMessage)
    }
  },methods:{
    updateData(){
      this.textMessage = 'New Message'
    }
  }
};
</script>

<template>
<!--  {{ msg }}-->
<!--  <InputField-->
<!--      label-value="Email"-->
<!--      :input-value="msg"-->
<!--      @input-i="(value) => msg = value"-->
<!--  />-->
<!--  <br> <br>-->

<!--  {{ msgV2 }}-->

<!--  <InputFieldV2 label-value="Password" v-model="msgV2"  />-->

<!--  <InputFieldV3 v-model:nameVal="name" v-model:emailVal="email" v-model:passwordVal="password" />-->
<!--  <br><br>-->
<!--  {{ textMessage }}-->
  <button @click="updateData">Change Message</button>
  {{textMessage}}
  <br> <br>

  <Footer/>

</template>

<style scoped>

</style>
