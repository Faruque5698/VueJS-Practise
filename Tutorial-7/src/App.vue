<script>
export default {
  data() {
    return {
      name: ''
    }
  },

  methods: {
    sayHello(name, e) {
      console.log(e);
      alert('Hello ' + name + '!');
    },
    formBtn() {
      event.preventDefault();
      console.log('Hello push me');
    },
    printData(e) {
      // console.log(e.target.value);
      this.name = e.target.value;
    }

  }
}
</script>

<template>
  <button @mouseenter="sayHello(this.name, $event)">Click Me</button>

  <form action="" v-on:submit.prevent="sayHello('Submit the form', $event)">
    <button>Hello push me</button>
  </form>

  <input @keyup="(e) => e.target.value"  :value="name"/>
  <p>{{ name }}</p>
</template>

<style scoped>

</style>
