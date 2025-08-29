<script>
export default {
  emits: ['on-click'],
  props:{
    // text: {
    //   type: String, I am using slot instead of prop
    //   required: true
    // }

  }
}
</script>

<template>
  <button @clik="$emit('on-click')">
<!-- {{ text }} use slot-->
<!--    <div style="background: red; width: 10px; height: 10px;" v-if="$slots['header']">-->
    <div style="background: red; width: 10px; height: 10px;" v-if="$slots.header">
      <slot name="header" ></slot>
    </div>
    <slot name="text"></slot>
    <slot name="footer"></slot>
  </button>
</template>

<style scoped>

</style>