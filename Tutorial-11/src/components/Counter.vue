<script lang="ts">
export default {
  data(){
    return {
      count: 0
    }
  },beforeCreate(){
    console.log('beforeCreate');
  },created(){
    console.log('created');
  },beforeMount() {
    console.log('beforeMount');
  },mounted(){
    console.log('mounted');
  },beforeUpdate(){
    console.log('beforeUpdate');
  },updated(){
    console.log('updated');
  },beforeUnmount(){
    console.log('beforeUnmount');
  },unmounted(){
    console.log('unmounted');
  }
}

</script>

<template>
  <h1>Hiiiii !!! {{count}}</h1>
  <button @click="count++">+</button> <br/>
</template>

<style scoped>

</style>