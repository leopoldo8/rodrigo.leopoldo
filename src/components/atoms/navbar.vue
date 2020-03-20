<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'navbar',
})
export default class NavBar extends Vue {
}
</script>
