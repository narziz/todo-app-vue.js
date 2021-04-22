<template lang="html">
  <button v-on:click="deleteTodo" class="todo-delete-btn" type="button" name="button">
    <span class="material-icons">clear</span>
  </button>
</template>

<script>
export default {
  methods: {
    deleteTodo: function(){
      var key = this.$parent.$vnode.key;
      var todos = this.$parent.$parent.todos;

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
