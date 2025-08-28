<script>
import ApiTest from "@/components/ApiTest.vue";
export default {
  components: {
    ApiTest,
  },
  data() {
    return {
      count: 0
    }
  },methods:{
    increment(){
      this.count++;
      // this.toggleAlert()
    },
    decrement(){
      this.count--;
      // this.toggleAlert()
    },
    toggleAlert(){
      if (this.count % 2 === 0) {
        alert('ok');
      }
    }
  },watch:{
    count(newValue, oldValue){
      if (newValue % 2 === 0) {
        alert('ok');
      }
    }
  }
}
</script>

<template>
    <h1> {{ count }}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <hr>
  <ApiTest/>
</template>


<style>

</style>