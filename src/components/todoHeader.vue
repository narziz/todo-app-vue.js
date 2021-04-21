<template lang="html">
  <header>
    <h1>Todo</h1>
    <button v-on:click="changeTheme" class="theme-btn light-theme-btn" type="button" name="theme">
      <span class="material-icons">{{ ternThemeMod }}</span>
    </button>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      ternThemeMod: 'dark_mode',
      currentTheme: 'light-theme'
    }
  },
  props: ['theme'],
  methods: {
    changeTheme: function () {
      this.currentTheme = this.theme;

      if(this.currentTheme == 'light-theme'){
        this.currentTheme = 'dark-theme';
        this.ternThemeMod = 'light_mode';
      } else if (this.currentTheme == 'dark-theme') {
        this.currentTheme = 'light-theme';
        this.ternThemeMod = 'dark_mode'
      }

      this.$emit('current-theme', this.currentTheme);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
