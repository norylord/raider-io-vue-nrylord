<template>
  <div class="navbar">

    <div class="navbar__img__section">
      <img alt="" src="../assets/telegram.svg" style="align-self: center;">
      <img alt="" src="../assets/github.svg" style="align-self: center;">
    </div>
    <button id="navbar__toggle" @click="toggleNavItems"><img alt="" src="../assets/menu.svg"></button>
    <div v-show="mobileView" class="navbar__items__section">
      <router-link to="/">
        <div @click="toggleNavItems" class="navbar__item"><img alt="" src="../assets/sword.svg"><h4 class="navbar__item__desc">Главная</h4>
        </div>
      </router-link>
      <router-link to="/character">
        <div @click="toggleNavItems" class="navbar__item"><img alt="" src="../assets/helmet.svg"><h4 class="navbar__item__desc">Персонаж</h4>
        </div>
      </router-link>
      <router-link to="/guild">
        <div @click="toggleNavItems" class="navbar__item"><img alt="" src="../assets/guild.svg"><h4 class="navbar__item__desc">Гильдия</h4>
        </div>
      </router-link>
      <router-link to="/equip">
        <div @click="toggleNavItems" class="navbar__item"><img alt="" src="../assets/dungeon.svg"><h4 class="navbar__item__desc">Подземелья</h4>
        </div>
      </router-link>
      <router-link to="/progress">
        <div @click="toggleNavItems" class="navbar__item"><img alt="" src="../assets/raid.svg"><h4 class="navbar__item__desc">Рейды</h4></div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true
    }
  },
  methods: {
    toggleNavItems() {
      if (window.innerWidth < 768){
        this.mobileView === false ? this.mobileView = true : this.mobileView = false
      }
    }
  },
  mounted() {
    this.mobileView = window.innerWidth > 768
    window.addEventListener('resize', () => {
      this.mobileView = window.innerWidth > 768
    })
  },
  beforeMount() {

  }

}
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: space-around
  align-items: center
  flex-flow: column nowrap
  background: #212121
  color: #eee
  position: fixed
  top: 0
  left: 0
  height: 100%

  &__button__container
    display: none
    height: 100%
    width: 30px
    cursor: pointer
    flex-direction: column
    justify-content: center
    align-items: center

  #navbar__toggle
    display: none
    border: 0
    padding: 5px
    border-radius: 5px
    background: #424242
    cursor: pointer

    img
      width: 30px



  &:hover
    transition: all 0.3s linear
    background: rgba(33, 33, 33, 0.8)

    .navbar__item__desc
      display: flex

  &__img__section
    display: flex
    flex-flow: column nowrap

    img
      margin: 5px


  &__items__section
    display: flex
    flex-flow: column nowrap
    flex: 0 0 70%

  &__item
    padding: 30px 10px
    display: flex
    flex-flow: row nowrap
    align-items: center

    &:hover
      transition: all 0.3s linear
      background: #323232
      cursor: pointer

    &__desc
      display: none
      opacity: 1
      transition: all 0.1s ease-in-out
      padding: 0 10px
      min-width: 200px
      text-align: center

      &:hover
        display: flex

  img
    width: 40px


@media (max-width: 768px)
  .navbar
    display: flex
    flex-flow: row wrap
    justify-content: space-around
    position: static

    &:hover
      background: #212121

    &__button__container
      display: flex


    &__img__section
      flex-flow: row nowrap
      padding: 10px
      flex: 0 0 50%

      img
        margin: 5px 10px

    &__items__section
      flex: 1 0 100%

    &__item
      flex: 1 0 100%
      padding: 30px 4rem
      display: flex
      justify-content: space-around
      background: #1c1c1c


    #navbar__toggle
      display: flex
</style>