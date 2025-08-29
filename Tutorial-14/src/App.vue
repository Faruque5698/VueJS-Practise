<script>
import InputField from "@/components/InputField.vue";
import InputFieldV2 from "@/components/InputFieldV2.vue";
import InputFieldV3 from "@/components/InputFieldV3.vue";

export default {
  components: {
    InputField,
    InputFieldV2,
    InputFieldV3
  },
  data() {
    return {
      msg: '',
      msgV2: '',
      name:'',
      email:'',
      password:'',
      textMessage:''

    }
  },
  updated() {
    this.textMessage = 'My name is ' + this.name + ', email is ' + this.email + ' and password is ' + this.password;
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

  <InputFieldV3 v-model:nameVal="name" v-model:emailVal="email" v-model:passwordVal="password" />
  <br><br>
  {{ textMessage }}

</template>

<style scoped>

</style>
