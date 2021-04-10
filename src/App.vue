<template lang="html">
  <div class="container-fluid rlt">
    <div class="bg-upper">
      <img v-bind:src="imgUrl" alt="">
    </div>
    <div class="bg-bottom">
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/narziz" target="_blank">Narmin Aziz</a>.
      </div>
    </div>
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
            <!-- <span class="material-icons">done</span> -->
          </button>
          <input v-model="newTodo" v-on:keyup.enter="addNewTodo(newTodo)" type="text" name="todo" value="" placeholder="Create a new todo...">
        </div>
        <div class="todos-container">
          <div class="todos">
            <todo-item
            v-for='todo in filteredTodos'
            v-bind:key="todo.id"
            v-bind:class="{'todo-completed': todo.completed}"
            v-bind:todo="todo">{{ todo.text }}</todo-item>
          </div>
          <footer class="todos-footer">
            <div class="count-uncompleted">
              <p>{{ uncompletedItems }} items left</p>
            </div>
            <div class="todo-nav">
              <ul>
                <li
                  v-for="(item, index) in nav"
                  v-on:click="activateNav(item.key)"
                  v-bind:key="item.key"
                  v-bind:class='{"active-nav": visibility == item.key}'>{{ item.text }}</li>
              </ul>
            </div>
            <div class="clear-completed">
              <button v-on:click="clearCompleted" type="button" name="button">Clear Completed</button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import todoItem from './components/todoItem.vue'

var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todo.completed;
    });
  },
  completed: function(todos) {
    return todos.filter(function(todo) {
      return todo.completed;
    });
  }
};

export default {
  data: function () {
    return {
      hello: 'this is from Vue.js App component ^__^',
      imgUrl: './dist/images/bg-desktop-dark.jpg',
      newTodo: '',
      visibility: 'all',
      todos: [
        { id: 0, text: 'Lorem ipsum doloer mis', completed: false },
        { id: 1, text: 'i have to do many things', completed: false },
        { id: 2, text: 'lololo', completed: false },
        { id: 3, text: 'this is my todo list', completed: true },
      ],
      nav: [
        { key: 'all', text: 'All'},
        { key: 'active', text: 'Active'},
        { key: 'completed', text: 'Completed'},
      ]
    }
  },
  components: {
    'todo-item': todoItem
  },
  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos);
    },
    uncompletedItems: function(){
      return filters['active'](this.todos).length;
    }
  },
  methods: {
    addNewTodo: function(newTodo){
      this.todos.push({ id: this.todos.length + 1, text: newTodo, completed: false });
      this.newTodo = '';
    },
    activateNav: function(key){
      this.visibility = key;
    },
    clearCompleted: function(){
      this.todos = filters['active'](this.todos);
    },
  }
}
</script>

<style lang="css">
</style>

<!-- <script src="./my-component.js"></script>
<style src="./my-component.css"></style> -->
