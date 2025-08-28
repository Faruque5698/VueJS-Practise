<script>
export default {
  data() {
    return {
      books: [
        {
          name: "Agent Curter",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1500,
          genre: ["Horror", "Science Fiction", "Thriller"],
        },
        {
          name: "John Cena",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1500,
          genre: ["Horror", "Science Fiction", "Thriller"],

        },
        {
          name: "Agent Cooper",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1500,
          genre: [],

        },
        {
          name: "Agent Elle ele li",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1500,
          genre: ["Horror", "Science Fiction", "Thriller"],

        }
      ],
      myObject:{
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
    }
  },computed:{
    filteredBook(){
      return this.books.filter((book)=>
        book.genre.length !== 0
      )
    }
  }
}
</script>

<template>
  <div class="container">

<!--    v-for using object-->
    <ul>
      <li v-for="(value, key, index) in myObject">
        {{key}}({{index}}):{{value}}
      </li>
    </ul>

    <span v-for="n in 100">{{n}}</span>


<!--   use computer filtered-->
    <div class="row">
      <div class="card col-4 m-3 p-3" style="width: 18rem;" v-for="(book, index) in filteredBook">
        {{ console.log('v-for runs') }}
        <img class="card-img-top" src="https://surl.li/eahptr" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ book.name }} - ({{ index }})</h5>
          <p class="card-text"> {{
              book.description && book.description.length > 50
                  ? book.description.substring(0, 50) + '...'
                  : book.description
            }}
          </p>
          <h4 class="card-text">{{ book.price }}Tk</h4>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>

    <!--     With indexing-->
<!--    <div class="row">-->
<!--      <div class="card col-4 m-3 p-3" style="width: 18rem;" v-for="(book, index) in books">-->
<!--        {{ console.log('v-for runs') }}-->
<!--        <img class="card-img-top" src="https://surl.li/eahptr" alt="Card image cap">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">{{ book.name }} - ({{ index }})</h5>-->
<!--          <p class="card-text"> {{-->
<!--              book.description && book.description.length > 50-->
<!--                  ? book.description.substring(0, 50) + '...'-->
<!--                  : book.description-->
<!--            }}-->
<!--          </p>-->
<!--          <h4 class="card-text">{{ book.price }}Tk</h4>-->
<!--          <a href="#" class="btn btn-primary">Buy Now</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


<!--    &lt;!&ndash;    without indexing&ndash;&gt;-->
<!--    <div class="row">-->
<!--      <div class="card col-4 m-3 p-3" style="width: 18rem;" v-for="book in books">-->
<!--        {{ console.log('v-for runs') }}-->
<!--        <img class="card-img-top" src="https://surl.li/eahptr" alt="Card image cap">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">{{ book.name }}</h5>-->
<!--          <p class="card-text"> {{-->
<!--              book.description && book.description.length > 50-->
<!--                  ? book.description.substring(0, 50) + '...'-->
<!--                  : book.description-->
<!--            }}-->
<!--          </p>-->
<!--          <h4 class="card-text">{{ book.price }}Tk</h4>-->
<!--          <a href="#" class="btn btn-primary">Buy Now</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


<!--    &lt;!&ndash;    Direct element select&ndash;&gt;-->
<!--    <div class="row">-->
<!--      <div class="card col-4 col-md-3 col-sm-1  m-3 p-3" style="width: 18rem;"-->
<!--           v-for="{ name, price, description } in books">-->
<!--        {{ console.log('v-for runs') }}-->
<!--        <img class="card-img-top" src="https://surl.li/eahptr" alt="Card image cap">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">{{ name }}</h5>-->
<!--          <p class="card-text"> {{-->
<!--              description && description.length > 50-->
<!--                  ? description.substring(0, 50) + '...'-->
<!--                  : description-->
<!--            }}-->
<!--          </p>-->
<!--          <h4 class="card-text">{{ price }}Tk</h4>-->
<!--          <a href="#" class="btn btn-primary">Buy Now</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash;    Nested v-for and v-if and v-for to gather also use v-show &ndash;&gt;-->
<!--    <div class="row">-->
<!--      <div class="card col-4 col-md-3 col-sm-1  m-3 p-3" style="width: 18rem;" v-for="book in books">-->
<!--        {{ console.log('v-for runs') }}-->
<!--        <img class="card-img-top" src="https://surl.li/eahptr" alt="Card image cap">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">{{ book.name }}</h5>-->
<!--          <div v-if="book.length !== 0">-->
<!--             <span class="card-text" style="font-size:10px;"-->
<!--                   v-for="{cat, catIndex} in book.genre">  {{ cat }}{{ catIndex < book.genre.length - 1 ? ", " : "" }}-->
<!--          </span>-->
<!--          </div>-->

<!--&lt;!&ndash;          <div v-show="book.length !== 0">&ndash;&gt;-->
<!--&lt;!&ndash;             <span class="card-text" style="font-size:10px;"&ndash;&gt;-->
<!--&lt;!&ndash;                   v-for="(cat, catIndex) in book.genre">  {{ cat }}{{ catIndex < book.genre.length - 1 ? ", " : "" }}&ndash;&gt;-->
<!--&lt;!&ndash;          </span>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->

<!--          <p class="card-text"> {{-->
<!--              book.description && book.description.length > 50-->
<!--                  ? book.description.substring(0, 50) + '...'-->
<!--                  : book.description-->
<!--            }}-->
<!--          </p>-->
<!--          <h4 class="card-text">{{ book.price }}Tk</h4>-->
<!--          <a href="#" class="btn btn-primary">Buy Now</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>

</template>

<style scoped>

</style>
