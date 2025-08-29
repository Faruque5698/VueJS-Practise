<script>
import Button from "@/components/Button.vue";
import Home from "@/components/Home.vue";

export default {
  components: {
    Button,
    Home
  },
  data() {
    return {
      parentMessage: "Hello from Parent",
      componentName: "Home"
    }
  },

}
</script>
<template>
<!--  &lt;!&ndash;  <Button text="click-me" />&ndash;&gt;-->
<!--  &lt;!&ndash;  Using SLot&ndash;&gt;-->
<!--  <Button>-->

<!--&lt;!&ndash;    <template v-slot:header >&ndash;&gt;-->
<!--&lt;!&ndash;      <img src="https://vuejs.org/assets/slots.CKcE8XYd.png" width="100px" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;    </template>&ndash;&gt;-->
<!--    <template v-slot:text>-->
<!--      Click ME-->
<!--    </template>-->
<!--    <template v-slot:footer>-->
<!--      <img src="https://vuejs.org/assets/slots.CKcE8XYd.png" width="100px" alt="">-->
<!--    </template>-->
<!--  </Button>-->
<!--  <br>-->
<!--  <button @click="parentMessage='Ashad'">Change</button>-->

  <Component :is="componentName"></Component>


</template>

<style scoped>

</style>
