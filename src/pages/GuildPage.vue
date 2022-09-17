<template>
  <div class="container">
    <div class="guild-form">
      <custom-input v-model="cfg.name" placeholder="Введите название..."/>
      <div class="button-container">
        <custom-button @click="getCharacter">Запрос</custom-button>
        <my-select v-model="cfg.realm" :options="realmArray"/>
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
        name: '',
        region: 'eu',
        realm: ''
      },
      realmArray: realmList
    }
  },
  methods: {
    async getCharacter() {
      const response = await RequestService.guild(this.cfg)
      this.guild = await response.data
      console.log(this.guild)
    }
  },
}
</script>

<style lang="sass" scoped>
.button-container
  display: flex
  align-items: center
  justify-content: space-between
</style>