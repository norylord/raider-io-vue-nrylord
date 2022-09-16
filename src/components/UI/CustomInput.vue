<template>
  <input :value="modelValue" class="input" type="text" @input='updateInput'>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style lang="sass" scoped>
.input
  padding: 10px 15px
  font-size: 30px
  margin: 20px 0
  width: 100%
  outline: none
  border: 0
  border-bottom: 3px solid
  border-image-source: linear-gradient(to left, #676767, #676767)
  border-image-slice: 1
  background: transparent
  transition: border-image-source 0.2s ease-in

  &:focus
    border-bottom: 3px solid
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d)
    transition: border-image-source 0.5s ease-in
    border-image-slice: 1
</style>