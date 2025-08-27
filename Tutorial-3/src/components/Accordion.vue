<script lang="ts">
export default {
  data(){
    return {
      isVisible: false,
    }
  },methods:{
    displayAction(){
      this.isVisible = !this.isVisible;
      // if(this.isVisible){
      //   this.isVisible = false;
      // }else{
      //   this.isVisible = true;
      // }
    }
  }
}
</script>

<template>
  <div>
    <h3>Title</h3>
    <button @click="displayAction">+</button>
    <p  :class="{ 'show-content':isVisible }">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi architecto cum, deserunt eaque facilis mollitia omnis quae quasi quidem. Aut consequuntur dicta dolor doloribus facilis labore nihil perferendis ut.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias amet aperiam asperiores blanditiis debitis eum impedit itaque nam nisi pariatur quae quisquam repellendus unde, ut? Blanditiis possimus quaerat tempore?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque enim eum expedita mollitia nam praesentium quisquam ratione veritatis! Alias consectetur cupiditate dignissimos dolor eius, labore magni quia quo veniam voluptas?

    </p>
  </div>
</template>

<style scoped>
  p{
    display: none;
  }
  .show-content{
    display: block;
  }
</style>