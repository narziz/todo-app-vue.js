<template lang="html">
  <button v-on:click="completeTodo" class="todo-done-btn" type="button" name="button">
    <span v-show="todo.completed" class="material-icons">done</span>
  </button>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    completeTodo: function(){
      this.todo.completed = !this.todo.completed;
    },
  }
}
</script>

<style lang="css" scoped>
</style>
