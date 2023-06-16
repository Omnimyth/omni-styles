<template>
  <button :class="type" @click="action">{{ text }}</button>
</template>

<script>
export default {
  name: "omni-button",
  props: ['type', 'text', 'action']
}
</script>

<style lang="sass" scoped>
@import '../styles'
.primary
  background-color: $primary-light
  padding: 12px
</style>