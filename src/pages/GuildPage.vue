<template>
  <div class="container">
    <div class="guild-form">
      <custom-input v-model="cfg.name" placeholder="Введите название..."/>
      <div class="button-container">
        <custom-button @click="getGuild">Запрос</custom-button>
        <my-select v-model="cfg.realm" :options="realmArray"/>
      </div>
    </div>
    <div v-if="guild.hasOwnProperty('name')"
         :class="['guild-card', guild.faction === 'horde' ? 'horde' : 'alliance']">
      <div class="guild-card__desc">
        <h1>{{ guild.name }}</h1>
        <h3>Фракция: {{ guild.faction }}</h3>
        <h3>Сервер: {{ guild.realm }}</h3>
        <custom-button>Raider.IO</custom-button>
      </div>
      <div class="guild-card__raids">
        <div v-for="(progress, raid) in raidProgress" :key="raid" class="guild-card__raids__card">
          <h3>{{ raid }}</h3>
          <p>Сводка: {{ progress.summary }}</p>
          <p>Всего боссов: {{ progress.total_bosses }}</p>
          <p>Нормальная сложность: {{ progress.normal_bosses_killed }}</p>
          <p>Героическая сложность: {{ progress.heroic_bosses_killed }}</p>
          <p>Эпохальная сложность: {{ progress.mythic_bosses_killed }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import realmList from "@/static/realmList";
import CustomInput from "@/components/UI/CustomInput";
import CustomButton from "@/components/UI/CustomButton";
import MySelect from "@/components/UI/CustomSelect";
import RequestService from "@/api/RequestService";

export default {
  components: {MySelect, CustomButton, CustomInput},
  data() {
    return {
      guild: {},
      cfg: {
        name: 'Маленькая инди компания',
        region: 'eu',
        realm: 'borean-tundra'
      },
      realmArray: realmList,
      raidProgress: {}
    }
  },
  methods: {
    async getGuild() {
      const response = await RequestService.guild(this.cfg)
      this.guild = await response.data
      this.raidProgress = this.guild.raid_progression
      console.log(this.guild)
    }
  },
  mounted() {
    this.getGuild()
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
  color: #eee

  button
    background: linear-gradient(to right, #000000, #530000)

.alliance
  background: linear-gradient(to bottom, #4e85ea, #102b4f)

.guild-card
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

  &__raids
    display: flex
    justify-content: center
    flex-flow: row wrap

    &__card
      display: flex
      flex-direction: column
      flex: 1 0 25%
      padding: 20px
      margin: 20px
</style>