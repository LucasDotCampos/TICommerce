<template>
  <Navbar />

  <div class="product-container">
    <h1>Carrinho</h1>
    <div class="product-list">
      <div class="product">
        <div class="product-details">
          <h3 class="product-name">Name</h3>

          <p class="product-description">description</p>
          <p class="product-quantity"><strong>Quantidade: </strong>20</p>

          <p class="product-price"><strong>Preço:</strong> R$2000</p>
        </div>
        <button>Pagar</button>
      </div>
    </div>

    <div class="product-list">
      <div class="product">
        <div class="product-details">
          <h3 class="product-name">Name</h3>

          <p class="product-description">description</p>
          <p class="product-quantity"><strong>Quantidade: </strong>20</p>

          <p class="product-price"><strong>Preço:</strong> R$2000</p>
        </div>
        <button>Pagar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/navbar.vue";
import { api } from "../services/api";

export default defineComponent({
  data() {
    return {
      client: "",
      schedule: "",
      cellphone: "",
      address: "",
      hour: "",
    };
  },
  methods: {},
  components: { Navbar },
});
</script>
<style src="./styles/ShoppingCart.scss" scoped />
