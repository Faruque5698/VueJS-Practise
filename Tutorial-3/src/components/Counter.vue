<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      // isActive: false,
      // hasError: false,
      classObject:{
        'active': true,
        'danger': false,
      },
    }
  },
  methods: {
    increase() {
      this.count++;
      if (this.count >= 0) {
        this.classObject['active'] = true;
        this.classObject['danger'] = false;

        // this.isActive = false;
        // this.hasError = true;
      }else{
        this.classObject['active'] = false;
        this.classObject['danger'] = true;

        // this.isActive = true;
        // this.hasError = false;
      }
    },
    decrease() {
      this.count--;
      if (this.count >= 0) {
        this.classObject['active'] = false;
        this.classObject['danger'] = true;

        // this.isActive = false;
        // this.hasError = true;
      }else{
        this.classObject['active'] = true;
        this.classObject['danger'] = false;

        // this.isActive = true;
        // this.hasError = false;
      }
    }
  },mounted(): any {
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
  }
}

</script>

<template>
<!--  <h1 class="static" :class="{ 'active':isActive, 'danger': hasError }">Counter = {{ count }}</h1>-->
  <h1 class="static" :class="classObject">Counter = {{ count }}</h1>
  <button @click="increase">Increase</button>
  <button @click="decrease">Decrease</button>
</template>

<style scoped>
  .active{
    color: crimson;
  }
  .danger{
    background-color: royalblue;
  }
  .static{
    font-size: 25px;
  }
</style>