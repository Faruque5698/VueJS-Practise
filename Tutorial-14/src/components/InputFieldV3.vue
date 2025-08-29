<script>
export default {
  props: {
    labelVal: String,
    emailVal:String,
    passwordVal:String,
    nameVal:String
  },emits:[
    "update:emailVal",
    "update:passwordVal",
    "update:nameVal"
  ]
}
</script>

<template>
  <label for="">{{ labelVal }}</label>
  <input type="text" :value="nameVal" @input="$emit('update:nameVal', $event.target.value)" />
  <input type="text" :value="emailVal" @input="$emit('update:emailVal', $event.target.value)">
  <input type="text" :value="passwordVal" @input="$emit('update:passwordVal', $event.target.value)">
</template>

<style scoped>

</style>