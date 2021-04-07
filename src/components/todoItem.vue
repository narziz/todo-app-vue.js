<template lang="html">
  <div v-bind:class="{'todo-completed': completed}" class="todo">
    <div class="todo-left">
      <button v-on:click="isCompleted" class="todo-done-btn" type="button" name="button">
        <span class="material-icons">done</span>
      </button>
      <p class="todo-text"><slot>Jacks 3x to do something</slot></p>
    </div>
    <div class="todo-right">
      <button v-on:click="deleteTodo()" class="todo-delete-btn" type="button" name="button">
        <span class="material-icons">clear</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      completed: false,
    }
  },
  methods: {
    isCompleted: function(){
      this.completed = !this.completed;
    },
    deleteTodo: function(){
      console.log('this.todos --> ', this.$parent.todos);
      // console.log(todos);
      console.log(this.$vnode.key);
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>
