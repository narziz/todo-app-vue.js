<template lang="html">
  <footer class="todos-footer">
    <div class="footer-details">
      <div class="count-uncompleted">
        <p>{{ uncompletedItems }} {{ uncompletedItems | pluralize }} left</p>
      </div>
      <div class="clear-completed">
        <button v-on:click="clearCompleted" type="button" name="button">Clear Completed</button>
      </div>
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
  </footer>
</template>

<script>

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
  data: function(){
    return {
      visibility: 'all',
      nav: [
        { key: 'all', text: 'All'},
        { key: 'active', text: 'Active'},
        { key: 'completed', text: 'Completed'},
      ]
    }
  },
  props: ['todos'],
  computed: {
    uncompletedItems: function(){
      return filters['active'](this.todos).length;
    }
  },
  methods: {
    activateNav: function(key){
      this.visibility = key;
      this.$emit('visible', this.visibility);
    },
    clearCompleted: function(){
      this.$emit('update-todo', filters['active'](this.todos));
    },
  },
  filters: {
    pluralize: function(num){
      return num == 1 ? 'item' : 'items';
    }
  },
}
</script>

<style lang="css" scoped>
</style>
