<template>
  <Navbar />
  <div class="product-container">
    <h1>Produtos</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <img
          :src="'http://localhost:3000/files/' + product.image"
          alt="Product Image"
          class="product-image"
        />
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>

          <p class="product-description">{{ product.description }}</p>
          <p class="product-quantity">
            <strong>Quantidade: </strong>{{ product.quantity }}
          </p>

          <p class="product-price">
            <strong>Preço:</strong> R${{ product.price }}
          </p>
        </div>
        <button @click="sendToEditPage(product.id)">Editar</button>
        <button @click="sendToShoppingCartPage(product.id)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/navbar.vue";
import { api } from "../services/api";

let isButtonVisible = false;
const token = localStorage.getItem("token");
token !== null ? (isButtonVisible = true) : null;

export default defineComponent({
  data() {
    return {
      products: [] as Product[],
      isLogged: isButtonVisible,
    };
  },
  async mounted() {
    const response = await api.get("/product");
    this.products = response.data;
  },
  methods: {
    sendToEditPage(product_id: string) {
      console.log(product_id);
      localStorage.setItem("product_id", product_id);
      this.$router.push("/produto/editar");
    },
    sendToShoppingCartPage(product_id: string) {
      console.log(product_id);

      this.$router.push("/carrinho");
    },
  },
  components: {
    Navbar,
  },
});

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}
</script>

<style src="./styles/Products.scss" lang="scss" scoped />
