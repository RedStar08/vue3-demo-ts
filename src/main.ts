import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { ElementPlus } from "@/plugins"

const app = createApp(App)

app.use(store).use(router)
app.use(ElementPlus)
app.mount("#app")
