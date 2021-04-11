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
        <todoHeader></todoHeader>
        <todoAddNewItem v-on:add-todo="addNewTodo"></todoAddNewItem>
        <div class="todos-container">
          <div class="todos">
            <todoItem
            v-for='todo in filteredTodos'
            v-bind:key="todo.id"
            v-bind:class="{'todo-completed': todo.completed}"
            v-bind:todo="todo">{{ todo.text }}</todoItem>
          </div>
          <todoFooter
            v-on:visible="changeVisibility"
            v-on:update-todo="updateTodo"
            v-bind:todos="todos"></todoFooter>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import todoItem from './components/todoItem.vue';
import todoFooter from './components/todoFooter.vue';
import todoHeader from './components/todoHeader.vue';
import todoAddNewItem from './components/todoAddNewItem.vue';

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
      visibility: 'all',
      todos: [
        { id: 0, text: 'Lorem ipsum doloer mis', completed: false },
        { id: 1, text: 'i have to do many things', completed: false },
        { id: 2, text: 'lololo', completed: false },
        { id: 3, text: 'this is my todo list', completed: true },
      ],
    }
  },
  components: {
    todoItem: todoItem,
    todoFooter: todoFooter,
    todoHeader: todoHeader,
    todoAddNewItem: todoAddNewItem
  },
  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos);
    },
  },
  methods: {
    changeVisibility: function(value){
      this.visibility = value;
    },
    updateTodo: function(value){
      console.log('Value from parent --> ', value);
      this.todos = value;
    },
    addNewTodo: function(value){
      this.todos.push({ id: this.todos.length + 1, text: value, completed: false });
    }
  },
}
</script>

<style lang="css">
</style>

<!-- <script src="./my-component.js"></script>
<style src="./my-component.css"></style> -->
