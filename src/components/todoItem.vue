<template lang="html">
  <div class="todo">
    <div class="todo-left">
      <todoItemCompleteButton v-bind:todo="todo"></todoItemCompleteButton>
      <p class="todo-text"><slot>Jacks 3x to do something</slot></p>
    </div>
    <div class="todo-right">
      <todoItemDeleteButton></todoItemDeleteButton>
    </div>
  </div>
</template>

<script>
import todoItemDeleteButton from './todoItemDeleteButton.vue';
import todoItemCompleteButton from './todoItemCompleteButton.vue';

export default {
  data: function(){
    return {
      // completed: false,
    }
  },
  components: {
    todoItemDeleteButton: todoItemDeleteButton,
    todoItemCompleteButton: todoItemCompleteButton
  },
  props: ['todo'],
  computed: {

  },
  methods: {
    // completeTodo: function(){
    //   this.todo.completed = !this.todo.completed;
    // },


    // deleteTodo: function(){
    //   var key = this.$vnode.key;
    //   var todos = this.$parent.todos;
    //
    //   for(var i=0; i < todos.length; i++){
    //     if ( todos[i].id == key ) {
    //       todos.splice(i, 1);
    //     }
    //   }
    //
    // },

  }
}
</script>

<style lang="css" scoped>
</style>
