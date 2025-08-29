<script>
export default {
  props:{
    labelValue:String,
    inputValue:String
  },
  emits:["input-i"],
}
</script>

<template>
  <label>{{ labelValue }}</label>
  <input type="text" :value="inputValue" @input="$emit('input-i', $event.target.value)" />
</template>

<style scoped>

</style>