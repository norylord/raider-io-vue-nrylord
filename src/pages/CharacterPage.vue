<template>
  <div class="container">
    <h1>Character Page</h1>
    <custom-input v-model="cfg.name" placeholder="Введите имя персонажа..."/>
    <custom-button @click="getCharacter">Запрос</custom-button>
    <div v-if="character.hasOwnProperty('name')" class="character-card">
      <img :src="character.thumbnail_url" alt="" style="border-radius: 50%; width: 125px; height: 125px">
      <div class="character-card__desc">
        <h1>{{ character.name }}</h1>
        <h3>Класс: {{ character.class }}</h3>
        <h3>Фракция: {{ character.faction }}</h3>
        <h3>Пол: {{ character.gender }}</h3>
        <h3>Специализация: {{ character.active_spec_name }}</h3>
        <h3>Раса: {{ character.race }}</h3>
        <h3>Сервер: {{ character.realm }}</h3>
        <custom-button>Raider.IO</custom-button>
        <h3>{{ character.achievement_points }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/UI/CustomInput";
import RequestService from "@/api/RequestService";
import CustomButton from "@/components/UI/CustomButton";

export default {
  components: {CustomButton, CustomInput},
  data() {
    return {
      character: {},
      cfg: {
        name: 'Лобера',
        region: 'eu',
        realm: 'borean-tundra'
      }
    }
  },
  methods: {
    async getCharacter() {
      const response = await RequestService.character(this.cfg)
      this.character = await response.data
      console.log(this.character)
    }
  },
  mounted() {
    this.getCharacter()
  }

}
</script>

<style lang="sass" scoped>
.character-card
  display: flex
  justify-content: space-around
  flex-flow: row wrap
  background: #fff
  padding: 20px
  border-radius: 20px
  box-shadow: 0 0 25px #c3c3c3
  margin: 20px 0

  &__desc
    display: flex
    flex-flow: column wrap
    padding: 20px
</style>