<script >
import Counter from "@/components/Counter.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Counter,
    Header,
  }
}
</script>

<template>
  <Header/>
  <counter />
  <Header/>

</template>

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
