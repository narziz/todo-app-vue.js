import Vue from 'vue'
import './assets/scss/main.scss';
import './assets/images/bg-desktop-dark.jpg';
import App from './App.vue'

Vue.component('todo-app', {
  template: '#hello-app-template',
})

new Vue({
    el: '#todo-app',
    render: h => h(App)
});
