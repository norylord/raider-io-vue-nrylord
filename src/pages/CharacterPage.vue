<template>
  <div class="container">

    <div class="character-form">
      <custom-input v-model="cfg.name" placeholder="Введите имя персонажа..."/>
      <div class="button-container">
        <custom-button @click="getCharacter">Запрос</custom-button>
        <my-select v-model="cfg.realm" :options="realmArray"/>
      </div>
    </div>

    <div v-if="character.hasOwnProperty('name')"
         :class="['character-card', character.faction === 'horde' ? 'horde' : 'alliance']">
      <img :src="character.thumbnail_url" alt="" style="border-radius: 50%; width: 125px; height: 125px">
      <div class="character-card__desc">
        <h1>{{ character.name }}</h1>
        <h3>Класс: {{ character.class }}</h3>
        <h3>Фракция: {{ character.faction }}</h3>
        <h3>Пол: {{ character.gender }}</h3>
        <h3>Специализация: {{ character.active_spec_name }}</h3>
        <h3>Раса: {{ character.race }}</h3>
        <h3>Сервер: {{ character.realm }}</h3>
        <h3>Очки достижений: {{ character.achievement_points }}</h3>
        <custom-button>Raider.IO</custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/UI/CustomInput";
import RequestService from "@/api/RequestService";
import CustomButton from "@/components/UI/CustomButton";
import realmList from "@/static/realmList";
import MySelect from "@/components/UI/CustomSelect";

export default {
  components: {MySelect, CustomButton, CustomInput},
  data() {
    return {
      character: {},
      cfg: {
        name: 'Лобера',
        region: 'eu',
        realm: 'borean-tundra'
      },
      realmArray: realmList
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
.button-container
  display: flex
  align-items: center
  justify-content: space-between

.horde
  background: linear-gradient(to bottom, #e13030, #4f1010)

  button
    background: #b00000

.alliance
  background: linear-gradient(to bottom, #4e85ea, #102b4f)

  button
    background: #1955ae

.character-card
  color: #eee
  padding: 40px
  border-radius: 20px
  box-shadow: 0 0 25px #c3c3c3
  margin: 20px 0


  &__desc
    display: flex
    flex-flow: column wrap

    h3
      margin: 10px 0
      font-weight: 400
</style>