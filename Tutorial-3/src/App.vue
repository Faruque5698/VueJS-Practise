<script >
import Counter from "@/components/Counter.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    Counter,
    Accordion,
  },data(){
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },methods:{
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  }
}

</script>

<template>
  <Counter/>
  <hr>
  <Accordion/>
  <hr>
  <h3 @click="mutateDeeply">{{obj.nested}}</h3>
  <h3>{{obj.arr}}</h3>
</template>

<style scoped>

</style>
