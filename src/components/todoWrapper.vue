<template lang="html">
  <div class="middle">
    <main class="container">
      <todoHeader
        v-bind:theme="theme"
        v-on:current-theme="changeTheme"
        ></todoHeader>
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
</template>

<script>

import todoItem from './todoItem.vue';
import todoFooter from './todoFooter.vue';
import todoHeader from './todoHeader.vue';
import todoAddNewItem from './todoAddNewItem.vue';

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
      visibility: 'all',
      currentTheme: '',
      todos: [
        { id: 0, text: 'Lorem ipsum doloer mis', completed: false },
        { id: 1, text: 'i have to do many things', completed: false },
        { id: 2, text: 'lololo', completed: false },
        { id: 3, text: 'this is my todo list', completed: true },
      ],
    }
  },
  props: ['theme'],
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
      console.log(this.todos);
      if (value.length > 0) {
        this.todos.unshift({ id: this.todos.length, text: value, completed: false });
      }
      console.log('changed > ',this.todos);
    },
    changeTheme: function(value){
      this.currentTheme = value;
      this.$emit('current-theme', this.currentTheme);
    }
  },
}
</script>

<style lang="css" scoped>
</style>
