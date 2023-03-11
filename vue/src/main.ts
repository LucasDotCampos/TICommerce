import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./styles.scss";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
