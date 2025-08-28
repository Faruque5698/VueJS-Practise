<script lang="ts">
export default {
  data() {
    return {
      isOn: true,
    }
  },methods:{
    checkClick(){
      if(this.isOn){
        console.log("Enable");
      }else{
        console.log("Disable");
      }
    }
  }
}
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <button class="btn btn-info" :disabled="!isOn"  @click="checkClick">Its shows When Its ON</button>
      <input type="checkbox" class="mt-2" v-model="isOn"> Is On
    </div>
  </div>
</template>

<style scoped>

</style>