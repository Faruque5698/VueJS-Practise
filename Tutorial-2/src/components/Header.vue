<script  lang="ts">

</script>

<template>
  <header>
    <h1>Header</h1>
    <nav>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Blog</a>
      <a href="">Contact Us</a>
    </nav>
  </header>

</template>

<style scoped>
  h1 {
    text-decoration: underline;
  }
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: royalblue;
  }

  header nav{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  header nav a{
    text-decoration: none;
    color: black;
  }
  header nav a:hover{
    background-color: white;
    font-style: italic;
  }
</style>