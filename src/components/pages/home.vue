<template>
  <div class="home">
    <div class="flicker" />
    <p>press any key to continue</p>
    <Input />
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Pre from '@/components/atoms/pre.vue';
import Input from '@/components/molecules/input.vue';

@Component({
  name: 'Home',
  components: {
    Pre,
    Input,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/colors'

.home
  background: #000
  background-image: radial-gradient(#414141c2, black 120%)
  width: 100%
  height: 100%
  text-align: left

  p
    color: $white
    font-size: medium
    font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,
    Bitstream Vera Sans Mono,Courier New, monospace
    text-shadow: 0px 0px 3px $white
    padding: 5px 0
    text-indent: 18px

  &:after
    content: ""
    position: absolute
    pointer-events: none
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background: repeating-linear-gradient(0deg, $secondary, $secondary 1px,
    transparent 1px, transparent 2px)

  ::selection
    background: #0080FF
    text-shadow: none

  .flicker
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: rgba(18, 16, 16, 0.2)
    opacity: 0
    z-index: 1000
    pointer-events: none
    animation: flicker 0.12s infinite

@keyframes flicker
  0%
    opacity: 0.552

  5%
    opacity: 0.48287

  10%
    opacity: 0.59134

  15.0%
    opacity: 0.79543

  20%
    opacity: 0.75134

  25%
    opacity: 0.1956

  30.0%
    opacity: 0.90687

  35%
    opacity: 0.122

  40%
    opacity: 0.62254

  45%
    opacity: 0.56977

  50%
    opacity: 0.9925

  55.0%
    opacity: 0.55487

  60.0%
    opacity: 0.16607

  65%
    opacity: 0.12353

  70%
    opacity: 0.2214

  75%
    opacity: 0.67908

  80%
    opacity: 0.97163

  85.0%
    opacity: 0.1275

  90%
    opacity: 0.37186

  95%
    opacity: 0.24475

  100%
    opacity: 0.37221


</style>
