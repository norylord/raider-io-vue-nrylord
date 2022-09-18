<template>
  <NavBar/>
  <div class="wrapper">
    <router-view></router-view>


  </div>
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
  color: #eee
  text-decoration: none

#app
  min-height: 100vh


body
  background: rgba(224, 228, 238, 0.95)

.wrapper
  margin-left: 60px

.container
  max-width: 1140px
  padding: 20px
  margin: 0 auto


@media (max-width: 700px)

.wrapper
  margin: 0
</style>