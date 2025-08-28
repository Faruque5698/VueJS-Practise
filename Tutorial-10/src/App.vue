<script>
import Counter from "@/components/Counter.vue";
import TemplateRef from "@/components/TemplateRef.vue";
export default {
  components: {
    Counter,
    TemplateRef
  },
  data() {
    return {
      isOk: false,
    };
  },
}
</script>

<template>
<!--  <Counter v-if='isOk'/>-->
<!--  <button @click="isOk=!isOk">Toggle</button>-->
<TemplateRef/>
</template>

<style scoped>

</style>
