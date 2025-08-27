<script lang="ts">
export default {
  data(){
    return {
      count: 0,
      isActive: false,
      hasError: false,
    }
  },
  methods: {
    increment(){
      this.count++;
      if(this.count > 0){
        this.isActive = true;
        this.hasError = false;
      }else{
        this.isActive = false;
        this.hasError = true;
      }
    },
    decrement(){
      this.count--;
      if(this.count > 0){
        this.isActive = true;
        this.hasError = false;
      }else{
        this.isActive = false;
        this.hasError = true;
      }
    }
  }
}
</script>

<template>
  <h1>Counter</h1>
  <h3 :class="{'default-headings':isActive, 'bg-danger':hasError}">{{count}}</h3>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style scoped>

</style>