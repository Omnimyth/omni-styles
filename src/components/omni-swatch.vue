<template>
  <div class="swatch">
    <div class="color-block" v-if="hex" :style="'background-color: ' + hex">
      <input type="text" readonly  :class="'color-code' + ((dark)? ' dark':'')" v-if="showCode" @click="$event.target.select()" :value="hex" />
    </div>
    <div class="color-block" v-else-if="rgba" :style="'background-color: ' + rgba">
      <input type="text" readonly  :class="'color-code' + ((dark)? ' dark':'')" v-if="showCode" @click="$event.target.select()" :value="rgba" />
    </div>
    <div class="color-block" v-else-if="rgb" :style="'background-color: ' + rgb">
      <input type="text" readonly  :class="'color-code' + ((dark)? ' dark':'')" v-if="showCode" @click="$event.target.select()" :value="rgb" />
    </div>
    <div class="color-block" v-else>
      <span class="color-code">Invalid color code</span>
    </div>
    <div class="color-label">
      <span class="color-name" v-if="name">{{ name }} <input type="text" readonly v-if="label" :size="label.length" @click="$event.target.select()" :value="label" /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "omni-swatch",
  props: {
    width: String,
    hex: String,
    rgba: Object,
    rgb: Object,
    name: String,
    label: String,
    dark: Boolean,
    showCode: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles'
.swatch
  margin: $spacing-s 0
  min-width: 100px
  min-height: 70px
  border-radius: $border-radius-s
  overflow: hidden
  border: 1px solid $color-border
  .color-block
    background-color: black
    min-height: 55px
    position: relative
    .color-code
      position: absolute
      bottom: $spacing-s
      left: $spacing-s
      color: $text-light
      outline: none
      border: none
      background-color: transparent
      font-family: $monospace-font
      text-transform: uppercase
      &.dark
        color: $label-light
  .color-label
    display: inline-block
    padding: $spacing-s
    width: 100%
    box-sizing: border-box
  .color-name
    display: inline-block
    position: relative
    font-size: 0.8em
    width: 100%
    input[type="text"]
      display: inline-block
      font-family: $monospace-font
      position: absolute
      margin-top: -0.4em
      white-space: nowrap
      padding: $spacing-xs $spacing-s
      opacity: 0.6
      background-color: rgba(#000, 0.1)
      border-radius: $border-radius-xs
      right: 0
      outline: none
      border: none
      width: auto

html.dark
  .swatch
    border: 1px solid rgba($color-border, 0.2)
    .color-label
      background-color: #2b313a
    .color-name
      input[type="text"]
        background-color: rgba(#000, 0.4)


</style>