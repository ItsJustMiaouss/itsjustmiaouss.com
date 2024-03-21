import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import NotFound from "./components/NotFound.vue"

const routes = [
  { path: "/:pathMatch(.*)", component: NotFound },
  {
    path: "/",
    component: Home,
  },
  {
    name: "Discord",
    path: "/discord",
    component: Home,
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
