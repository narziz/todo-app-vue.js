<template lang="html">
  <div class="container-fluid rlt">
    <div class="bg-upper">
      <img v-bind:src="imgUrl" alt="">
    </div>
    <div class="bg-bottom"></div>
    <div class="middle">
      <main class="container">
        <header>
          <h1>Todo</h1>
          <button class="theme-btn theme-light" type="button" name="theme">
            <span class="material-icons">light_mode</span>
          </button>
          <button class="theme-btn theme-dark" type="button" name="theme">
            <span class="material-icons">dark_mode</span>
          </button>
        </header>
        <div class="todo-input">
          <button v-on:click="addNewTodo(newTodo)" class="todo-add-btn" type="button" name="button">
            <span class="material-icons">done</span>
          </button>
          <input v-model="newTodo" v-on:keyup.enter="addNewTodo(newTodo)" type="text" name="todo" value="" placeholder="Create a new todo...">
        </div>
        <div class="todos-container">
          <div class="todos">
            <todo-item v-for='todo in todos' v-bind:key="todo.id">{{ todo.text }}</todo-item>
            <div class="todo todo-completed">
              <div class="todo-left">
                <button class="todo-done-btn" type="button" name="button">
                  <span class="material-icons">done</span>
                </button>
                <p class="todo-text">default fron non component</p>
              </div>
              <div class="todo-right">
                <button class="todo-delete-btn" type="button" name="button">
                  <span class="material-icons">clear</span>
                </button>
              </div>
            </div>
          </div>
          <div class="todos-footer">
            <div class="count-uncompleted">
              <p>5 items left</p>
            </div>
            <div class="todo-nav">
              <ul>
                <li class="active-nav">All</li>
                <li>Active</li>
                <li>Completed</li>
              </ul>
            </div>
            <div class="clear-completed">
              <button type="button" name="button">Clear Completed</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import todoItem from './components/todoItem.vue'

export default {
  data: function () {
    return {
      hello: 'this is from Vue.js App component ^__^',
      imgUrl: './dist/images/bg-desktop-dark.jpg',
      newTodo: '',
      todos: [
        { id: 0, text: 'Lorem ipsum doloer mis' },
        { id: 1, text: 'i have to do many things' },
        { id: 2, text: 'lololo' },
      ]
    }
  },
  components: {
    'todo-item': todoItem
  },
  methods: {
    addNewTodo: function(newTodo){
      this.todos.push({ id: this.todos.length + 1, text: newTodo });
      this.newTodo = '';
    }
  }
}
</script>

<style lang="css">
</style>

<!-- <script src="./my-component.js"></script>
<style src="./my-component.css"></style> -->
