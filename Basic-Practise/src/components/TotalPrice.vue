<script lang="ts">
  export default {
    data() {
      return {
        price: 0,
        quantity: 0,
      }
    },computed:{
      priceCalculation() {
        let totalPrice = this.price * this.quantity;
        return 'Total Price: ' + totalPrice;
      },
    }
  }
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <input type="number" class="form-control mt-2 mb-2" v-model="price">
      <input type="number" class="form-control mt-2 mb-2" v-model="quantity">
      <p>
        {{ priceCalculation }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>