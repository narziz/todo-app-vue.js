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
  components: {
    todoItemDeleteButton: todoItemDeleteButton,
    todoItemCompleteButton: todoItemCompleteButton
  },
  props: ['todo']
}
</script>

<style lang="css" scoped>
</style>
