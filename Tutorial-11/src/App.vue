<script>
import NewCompo from "@/components/NewCompo.vue";
export default {
  components: {NewCompo},
  data(){
    return{
      posts:[
        {title:'Post One', id:1, isValid:false},
        {title:'Post Two', id:4, isValid:true},
        {title:'Post Three', id:2, isValid:true},
      ],
      author:{
        name:'John Doe',
        age:30,
      }
    }
  }
}

</script>

<template>
  <Counter/>
<!--  <NewCompo v-for="post in posts"-->
<!--            v-bind:title="post.title"-->
<!--            :id="post.id"-->
<!--            :isValid="post.isValid"-->
<!--            :author="author"-->
<!--  />-->
</template>

<style scoped>

</style>
