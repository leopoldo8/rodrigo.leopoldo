<template>
  <pre class="bash">
    > <slot />
  </pre>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Pre',
})
export default class Pre extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/colors'

pre.bash
  color: $white
  font-size: medium
  font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,
  Bitstream Vera Sans Mono,Courier New, monospace
  width: 100%
  display: inline-block
  text-shadow: 0px 0px 3px $white
  margin: 5px 0

</style>
