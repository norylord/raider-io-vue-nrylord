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
  min-height: 100vh
  display: flex
  justify-content: center

body
  background: rgba(224,228,238,0.95)
.wrapper
  display: flex

.container
  max-width: 1140px
  padding: 20px
<<<<<<< Updated upstream
  margin: 0 auto
=======
  display: flex
  flex-grow: 1
  flex-direction: column
  justify-content: center
>>>>>>> Stashed changes

@media (max-width: 700px)
  #app
    display: block
</style>