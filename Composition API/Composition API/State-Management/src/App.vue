<script setup>
import {ref, reactive, computed} from 'vue'
import Task from "@/Components/Task.vue";
import Filter from "@/Components/Filter.vue";
import ModalWindow from "@/Components/ModalWindow.vue";
import {useTasksStore} from "@/stores/tasksStore.js";


const store = useTasksStore()
console.log(store);
// const tasks = store.tasks

let newTask = {
  completed: false,
}

let filterBy = ref("");

const showModal = ref(false);


const modalHandle = (value) => {
  showModal.value = value;
}

const filterTask = computed(() => {
  if (filterBy.value === "todo") {
    return store.tasks.filter(task => !task.completed);
  } else if (filterBy.value === "done") {
    return store.tasks.filter(task => task.completed);
  } else {
    return store.tasks;
  }
})

const setFilter = (filter) =>{
  filterBy.value = filter;

}

function addTask() {
  if (newTask.name && newTask.description) {
    newTask.id = Math.max(...store.tasks.map(task => task.id)) + 1
    store.tasks.push(newTask);
    newTask = {completed: false}
  } else {
    alert("Please enter a name or description")
  }
  showModal.value = false;
}

const changeStatus = (id) => {
  console.log('clicked', id);
  const task = store.tasks.filter(task => task.id === id)[0];
  task.completed = !task.completed;
  console.log(store.tasks);
}

</script>

<template>

  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          {{ store.appName }}
        </h1>
      </div>
      <button class="btn secondary" @click="modalHandle(true)">Add Task</button>


    </div>

    <!--    <input type="text" v-model="appName">-->

    <Filter :filterBy="filterBy" @setFilter="setFilter"/>

    <Task v-for="(task,index) in filterTask" :key="index" :task="task" @changeStatus="changeStatus"/>
    <ModalWindow :showModal="showModal"  @modalHandle="modalHandle" >
      <div class="add-task">
        <h3>Add a new task</h3>
        <input
            type="text"
            v-model="newTask.name"
            placeholder="Enter a title..."
        />
        <textarea
            v-model="newTask.description"
            rows="4"
            placeholder="Enter a description..."
        ></textarea>
        <button class="btn gray" @click="addTask">Add Task</button>
      </div>
    </ModalWindow>

  </main>


</template>


<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}

/* Add task form */
.add-task {
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    margin-bottom: 10px;
    font-size: 1.4rem;
    text-align: center;
    color: #333;
  }

  input, textarea {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 100%;
    outline: none;
    &:focus {
      border-color: #007bff;
    }
  }

  .btn.gray {
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    background-color: #6c757d;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
    &:hover {
      background-color: #5a6268;
    }
  }
}


</style>