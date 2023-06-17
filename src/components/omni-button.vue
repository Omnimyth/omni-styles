<template>
  <button :class="type + ' ' + size" @clicked="action" v-html="text"></button>
</template>

<script>
export default {
  name: "omni-button",
  props: ['type', 'text', 'size', 'action']
}
</script>

<style lang="sass" scoped>
@import '../styles'
button
  font-weight: 600
  font-size: 0.9em
  border: none
  padding: $spacing-s $spacing-m
  border-radius: $border-radius-s
  cursor: pointer
  display: inline-block
  margin: $spacing-s 0
  color: $text-light
  &.small
    font-size: 0.8em
    padding: $spacing-xs $spacing-s
    border-radius: $border-radius-xs
  &.large
    font-size: 1em
    padding: $spacing-m $spacing-l
  &.extra-large
    font-size: 1.2em
    padding: $spacing-l $spacing-xl
  &.primary
    background-color: $primary-light
    &:hover
      background-color: darken($primary-light, 5%)
  &.secondary
    background-color: transparent
    color: $primary-light
    border: $border-width solid $primary-light
    &:hover
      background-color: rgba($secondary-light, 5%)
      color: darken($primary-light, 5%)
      border-color: darken($primary-light, 5%)
  &.tertiary
    background-color: transparent
    color: $primary-light
    padding: $spacing-s 0
    &:hover
      color: darken($primary-light, 10%)
      text-decoration: underline

.dark
  button
    &.primary
      background-color: $secondary-light
      &:hover
        background-color: darken($secondary-light, 5%)
    &.secondary
      color: $secondary-light
      border-color: $secondary-light
      &:hover
        background-color: rgba($secondary-light, 5%)
        color: darken($secondary-light, 5%)
        border-color: darken($secondary-light, 5%)
    &.tertiary
      color: $secondary-light
      &:hover
        color: darken($secondary-light, 10%)

</style>