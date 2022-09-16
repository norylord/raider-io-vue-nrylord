<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar}
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: "Open Sans", sans-serif
  text-decoration: none

  &:visited
    color: #eee

a
  text-decoration: none

#app
  display: flex
  min-height: 100vh

body
  background: rgba(224, 228, 238, 0.95)

.wrapper
  display: flex

.container
  max-width: 1140px
  padding: 20px
  margin: auto

@media (max-width: 700px)
  #app
    display: block
</style>