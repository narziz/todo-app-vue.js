<template lang="html">
  <div class="container-fluid rlt" v-bind:class="theme">
    <todoBackground v-bind:theme="theme"></todoBackground>
    <todoWrapper
      v-bind:theme="theme"
      v-on:current-theme="changeTheme"></todoWrapper>
  </div>
</template>

<script>
import todoBackground from './components/todoBackground.vue';
import todoWrapper from './components/todoWrapper.vue';



export default {
  data: function(){
    return {
      theme: 'light-theme'
    }
  },
  components: {
    todoBackground: todoBackground,
    todoWrapper: todoWrapper
  },
  methods: {
    changeTheme: function(value){
      this.theme = value;
      console.log(value);
    }
  }
}
</script>

<style lang="css">
</style>

<!-- <script src="./my-component.js"></script>
<style src="./my-component.css"></style> -->
