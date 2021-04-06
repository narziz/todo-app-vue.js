<template lang="html">
  <div class="container-fluid rlt">
    <div class="bg-upper">
      <img v-bind:src="imgUrl" alt="">
    </div>
    <div class="bg-bottom"></div>
    <div class="middle">
      <main class="container">
        <header>
          <h1>Todo</h1>
          <button class="theme-btn theme-light" type="button" name="theme">
            <span class="material-icons">light_mode</span>
          </button>
          <button class="theme-btn theme-dark" type="button" name="theme">
            <span class="material-icons">dark_mode</span>
          </button>
        </header>
        <div class="todo-input">
          <button class="todo-add-btn" type="button" name="button">
            <span class="material-icons">done</span>
          </button>
          <input type="text" name="todo" value="" placeholder="Create a new todo...">
        </div>
        <div class="todos-container">
          <div class="todos">
            <todo-item></todo-item>
            <div class="todo todo-completed">
              <div class="todo-left">
                <button class="todo-done-btn" type="button" name="button">
                  <span class="material-icons">done</span>
                </button>
                <p class="todo-text">Jog around the park 3x</p>
              </div>
              <div class="todo-right">
                <button class="todo-delete-btn" type="button" name="button">
                  <span class="material-icons">clear</span>
                </button>
              </div>
            </div>
          </div>
          <div class="todos-footer">
            <div class="count-uncompleted">
              <p>5 items left</p>
            </div>
            <div class="todo-nav">
              <ul>
                <li class="active-nav">All</li>
                <li>Active</li>
                <li>Completed</li>
              </ul>
            </div>
            <div class="clear-completed">
              <button type="button" name="button">Clear Completed</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import todoItem from './components/todoItem.vue'

export default {
  data: function () {
    return {
      hello: 'this is from Vue.js App component ^__^',
      imgUrl: './dist/images/bg-desktop-dark.jpg'
    }
  },
  components: {
    'todo-item': todoItem
  }

}
</script>

<style lang="css">
</style>

<!-- <script src="./my-component.js"></script>
<style src="./my-component.css"></style> -->
