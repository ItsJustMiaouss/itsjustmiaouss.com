import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    name: "Discord",
    path: "/discord",
    component: {},
    beforeEnter: () => {
      location.href = "https://discord.gg/b6PNpxnWZY"
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
