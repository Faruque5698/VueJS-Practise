<script>
import Todo from './components/Todo.vue'
export default {
  components:{Todo},
  data(){
    return{
      todoList:[
        {
          id:1,
          title:"First Task",
          description:"This is my first task"
        },
        {
          id:2,
          title:"Second Task",
          description:"This is my second task"
        },
        {
          id:3,
          title:"Third Task",
          description:"This is my third task"
        },
        {
          id:4,
          title:"Fourth Task",
          description:"This is my fourth task"
        },
        {
          id:5,
          title:"Fifth Task",
          description:"This is my fifth task"
        },
        {
          id:6,
          title:"Sixth Task",
          description:"This is my sixth task"
        },
        {
          id:7,
          title:"Seventh Task",
          description:"This is my seventh task"
        }
      ]
    }
  }
}
</script>

<template>
  <Todo :todoList="todoList"/>
</template>

<style scoped>

</style>