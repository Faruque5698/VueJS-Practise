<script>
export default {
  props:{
    labelValue:String,
    modelValue:String,
  },
  emits:["update:modelValue"],
}
</script>

<template>
  <label>{{ labelValue }}</label>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue' , $event.target.value)" />
</template>

<style scoped>

</style>