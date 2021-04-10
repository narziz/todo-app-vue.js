<template lang="html">
  <div class="todo">
    <div class="todo-left">
      <button v-on:click="completeTodo" class="todo-done-btn" type="button" name="button">
        <span v-show="todo.completed" class="material-icons">done</span>
      </button>
      <p class="todo-text"><slot>Jacks 3x to do something</slot></p>
    </div>
    <div class="todo-right">
      <button v-on:click="deleteTodo" class="todo-delete-btn" type="button" name="button">
        <span class="material-icons">clear</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      // completed: false,
    }
  },
  props: ['todo'],
  computed: {

  },
  methods: {
    completeTodo: function(){
      this.todo.completed = !this.todo.completed;
    },

    deleteTodo: function(){
      var key = this.$vnode.key;
      var todos = this.$parent.todos;

      for(var i=0; i < todos.length; i++){
        if ( todos[i].id == key ) {
          todos.splice(i, 1);
        }
      }

    },

  }
}
</script>

<style lang="css" scoped>
</style>
