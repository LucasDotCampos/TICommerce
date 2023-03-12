import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./styles.scss";
import { createPinia } from "pinia";
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.component("Navbar", Navbar);
app.component("Footer", Footer);
app.mount("#app");
