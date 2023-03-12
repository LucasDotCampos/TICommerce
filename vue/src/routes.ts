import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import ProductsPage from "./pages/Products.vue";
import UpdateProducts from "./pages/UpdateProducts.vue";
import Home from "./pages/Home.vue";
import CreateProduct from "./pages/CreateProduct.vue";
import Test from "./pages/test.vue";
import Schedulling from "./pages/Schedulling.vue";
import ShoppingCartVue from "./pages/ShoppingCart.vue";
import About from "./pages/About.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/carrinho",
    name: "ShoppingCart",
    component: ShoppingCartVue,
  },
  {
    path: "/agendamento",
    name: "Schedulling",
    component: Schedulling,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },

  {
    path: "/produtos",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/sobre",
    name: "about",
    component: About,
  },

  {
    path: "/product/create",
    name: "CreateProduct",
    component: CreateProduct,
  },

  {
    path: "/produto/editar",
    name: "UpdateProducts",
    component: UpdateProducts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
