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
  padding: 15px 25px
  border-radius: 5px
  font-size: 18px
  color: #fff
  background: linear-gradient(to right, #1900ff, #008cff)
  border: 0
  cursor: pointer
</style>