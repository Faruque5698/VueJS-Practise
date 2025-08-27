<script>
export default {
  data() {
    return {
      counter:0,
      books: [
        {'id': 1, "book": "English for today."},
        {'id': 2, "book": "English for today."},
        {'id': 3, "book": "English for today."},
        {'id': 4, "book": "English for today."},
        {'id': 5, "book": "English for today."},
      ]
    }
  },methods:{
    checkTheNumberEvenOrOdd(){
      console.log('method called');
      return this.books.length % 2 === 0 ? 'Even' : 'Odd';
    },
    addBook(){
      this.books.push({'id':11, 'book': 'English for today.'});
    }
  },computed:{
    checkComputedNumberEvenOrOdd(){
      console.log('Computed called !');
      return (this.books.length + this.counter) % 2 === 0 ? 'Even' : 'Odd';
    }
  }
}
</script>

<template>
  {{ books }}
  <h2>{{ checkTheNumberEvenOrOdd() }}</h2>
  <h2>{{ checkTheNumberEvenOrOdd() }}</h2>
  <h2>{{ checkTheNumberEvenOrOdd() }}</h2>

  <h2>{{ checkComputedNumberEvenOrOdd }}</h2>
  <h2>{{ checkComputedNumberEvenOrOdd }}</h2>
  <h2>{{ checkComputedNumberEvenOrOdd }}</h2>
  <h2>{{ checkComputedNumberEvenOrOdd }}</h2>

  <button @click="addBook">Add new book</button>
  <button @click="counter++">Count {{counter}}</button>

</template>

<style scoped>

</style>
