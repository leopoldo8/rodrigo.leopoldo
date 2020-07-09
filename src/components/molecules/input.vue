<template>
  <Pre>
    <input v-model="value" id="caret-demo" class="caretjs" maxlength="15" />
  </Pre>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Pre from '@/components/atoms/pre.vue';

@Component({
  name: 'Input',
  components: {
    Pre,
  },
})
export default class Input extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/colors'
#input-span
  white-space: pre

input, .cursor
  font-size: medium
  font-family: Consolas,Monaco,Lucida Console,Liberation Mono,
  DejaVu Sans Mono, Bitstream Vera Sans Mono,Courier New, monospace
  color: $white

input
  outline: 0
  -webkit-appearance: none
  background: transparent
  display: inline-block
  text-shadow: 0px 0px 3px $white
  border: 0

.cursor
  white-space: normal
  animation: blink 1s 8.5s infinite
  font-size: 1.25em
  margin-left: -.3em

@keyframes blink
  0%
    opacity: 0
  40%
    opacity: 0
  50%
    opacity: 1
  90%
    opacity: 1
  100%
    opacity: 0

</style>
