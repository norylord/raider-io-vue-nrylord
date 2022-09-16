import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "@/pages/HomePage";
import CharacterPage from "@/pages/CharacterPage";
import GuildPage from "@/pages/GuildPage";
import EquipPage from "@/pages/EquipPage";
import RaidsPage from "@/pages/RaidsPage";

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/character',
    component: CharacterPage
  },
  {
    path: '/guild',
    component: GuildPage
  },
  {
    path: '/equip',
    component: EquipPage
  },
  {
    path: '/progress',
    component: RaidsPage
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
