<script lang="ts">

export default {
  data() {
    return {
      header: "Counter by Ashad",
      count: 0 //state called
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ header }}</h1>
    <br>
    <h3 id="count">{{ count }}</h3>
    <br>
    <button @click="increment">Increate</button>
    <button @click="decrement">Decrease</button>
    <br>
  </div>

</template>

<style scoped>
div {
  margin: 20px;
}

#count {
  margin-left: 80px;
}

button {
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  margin: 5px;
}

button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>