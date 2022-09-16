<template>
  <div class="navbar">

    <div class="navbar__img__section">
      <img style="align-self: center;" src="../assets/telegram.svg" alt="">
      <img style="align-self: center;" src="../assets/github.svg" alt="">
    </div>
    <input style="align-self: center;" id="navbar__toggle" type="checkbox">
    <label class='navbar__button__container' for="navbar__toggle">
      <div class='navbar__button'></div>
    </label>
    <div class="navbar__items__section">
      <router-link to="/"><div class="navbar__item"><img src="../assets/sword.svg" alt=""><h4 class="navbar__item__desc">Главная</h4></div></router-link>
      <router-link to="/character"><div class="navbar__item"><img src="../assets/helmet.svg" alt=""><h4 class="navbar__item__desc">Персонаж</h4></div></router-link>
      <router-link to="/guild"><div class="navbar__item"><img src="../assets/guild.svg" alt=""><h4 class="navbar__item__desc">Гильдия</h4></div></router-link>
      <router-link to="/equip"><div class="navbar__item"><img src="../assets/dungeon.svg" alt=""><h4 class="navbar__item__desc">Подземелья</h4></div></router-link>
      <router-link to="/progress"><div class="navbar__item"><img src="../assets/raid.svg" alt=""><h4 class="navbar__item__desc">Рейды</h4></div></router-link>
    </div>

  </div>
</template>

<script>
export default {

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
  position: absolute
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
  .navbar__button,
  .navbar__button::before,
  .navbar__button::after
    display: block
    background-color: #949494
    position: absolute
    height: 4px
    width: 30px
    transition: transform 500ms cubic-bezier(.17,.67,1,.36)
    border-radius: 2px

  .navbar__button::before
    content: ''
    margin-top: -8px
  .navbar__button::after
    content: ''
    margin-top: 8px

  #navbar__toggle:checked + .navbar__button__container .navbar__button::before
    margin-top: 0
    transform: rotate(135deg)
  #navbar__toggle:checked + .navbar__button__container .navbar__button
    background: rgba(255, 255, 255, 0)
  #navbar__toggle:checked + .navbar__button__container .navbar__button::after
    margin-top: 0
    transform: rotate(-135deg)

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


@media (max-width: 700px)
  .navbar
    display: flex
    flex-flow: row wrap
    justify-content: space-around
    position: static

    &__button__container
      display: flex

    &__img__section
      flex-flow: row nowrap
      flex: 0 0 50%
      img
        margin: 5px 10px
    &__items__section
      display: none
      flex: 1 0 100%
    &__item
      flex: 1 0 100%
      display: flex
      justify-content: center

  input:checked
    ~ .navbar__items__section
      display: flex
</style>