<template lang="html">
  <div class="todo-input">
    <button v-on:click="addNewTodo(newTodo)" class="todo-add-btn" type="button" name="button"></button>
    <input v-model="newTodo" v-on:keyup.enter="addNewTodo(newTodo)" type="text" name="todo" value="" placeholder="Create a new todo...">
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newTodo: '',
    }
  },
  props: ['todos'],
  methods: {
    addNewTodo: function(newTodo){
      this.$emit('add-todo', newTodo);
      this.newTodo = '';
    },
  }
}
</script>

<style lang="css" scoped>
</style>
