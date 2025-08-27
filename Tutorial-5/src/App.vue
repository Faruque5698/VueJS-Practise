<script>
export default {
  data() {
    return {
      awesome: 'Vue.js',
      buttonName: 'Toggle',
      isShow: false,
      showIt:true,
    }
  }, methods: {
    toggleButton(name) {
      // this.awesome = !this.awesome;
      this.awesome = name;
      // if (this.awesome){
      //   this.awesome = false;
      //   this.buttonName = 'Show';
      // }else{
      //   this.awesome = true;
      //   this.buttonName = 'Hide';
      // }
    },showBtn(){
      this.isShow = !this.isShow;
    },showItToggleBtn(){
      this.showIt = !this.showIt;
    }
  }
}
</script>

<template>
  <button @click="toggleButton('Laravel')">Toggle to Laravel</button>
  <button @click="toggleButton('Vue.js')">Toggle Vue js</button>
  <button @click="toggleButton('Laravel+Vue')">Toggle to Laravel + Vue</button>
  <h1 v-if="awesome === 'Vue.js'">Vue is awesome!</h1>
  <h1 v-else-if="awesome === 'Laravel'">Laravel is awesome!</h1>
  <h1 v-else>Laravel + Vue is awesome!</h1>
  <hr>
  <button @click="showBtn">Toggle button</button>

  <template v-if="isShow">
    <h3>A</h3>
    <h3>S</h3>
    <h3>H</h3>
    <h3>A</h3>
    <h3>D</h3>
  </template>

  <hr>
  <button @click="showItToggleBtn">Toggle Button</button>
  <h1 v-show="showIt">Hello!</h1>


</template>

<style scoped>

</style>
