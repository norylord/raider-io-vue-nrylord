<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'customButton'
}
</script>

<style lang="sass" scoped>
button
  padding: 15px
  border-radius: 5px
  color: #fff
  background: linear-gradient(to right, #1900ff, #008cff)
  border: 0
  cursor: pointer
</style>