<template lang="html">
  <div>
    <div class="bg-upper">
      <picture>
        <source media="(max-width:375px)" v-bind:srcset="showMobileImage">
        <img v-bind:src="showImage" alt="background image">
      </picture>
    </div>
    <div class="bg-bottom">
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/narziz" target="_blank">Narmin Aziz</a>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      imgUrl: './images/bg-desktop-light.jpg',
      mobileImgUrl: './images/bg-mobile-light.jpg'
    }
  },
  props: ['theme'],
  computed: {
    showImage: function(){
      if (this.theme == 'light-theme') {
        this.imgUrl = './images/bg-desktop-light.jpg';
      } else {
        this.imgUrl = './images/bg-desktop-dark.jpg';
      }
      return this.imgUrl
    },
    showMobileImage: function(){
      if (this.theme == 'light-theme') {
        this.mobileImgUrl = './images/bg-mobile-light.jpg'
      } else {
        this.mobileImgUrl = './images/bg-mobile-dark.jpg'
      }
      return this.mobileImgUrl
    }
  }
}
</script>

<style lang="css" scoped>
</style>
