<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

import Navbar from '@/components/atoms/navbar.vue';

@Component({
  name: 'app',
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import '@/assets/sass/reset'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  width: 100vw
  height: 100vh

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

</style>
