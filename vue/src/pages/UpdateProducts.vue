<template>
  <Navbar />
  <div>
    <h1>Update Product Quantity</h1>
    <form @submit.prevent="sendPayload">
      <p>{{ name }}</p>
      <label for="quantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        v-model="quantity"
        required
      />
      <br /><br />
      <button type="submit">Update Quantity</button>
    </form>
  </div>
</template>

<script lang="ts">
import { api } from "../services/api";
import Navbar from "../components/navbar.vue";

export default {
  data() {
    return {
      quantity: "",
      price: 0,
      image: "",
      name: "",
    };
  },

  methods: {
    async sendPayload() {
      try {
        const product_id = localStorage.getItem("product_id");
        const token = localStorage.getItem("token");
        const response = await api.patch(
          "/product/patch",
          {
            id: product_id,
            quantity: this.quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
      } catch (error: any) {
        console.error(error.message);
      }
    },
    async getData() {
      try {
        const product_id = localStorage.getItem("product_id");
        const product = await api.get(`product/${product_id}`);
        const { name, quantity, price, image } = product.data;
        this.name = name;
        this.image = image;
        this.quantity = quantity;
        this.price = price;
      } catch (err: any) {
        return err.message;
      }
    },
  },
  mounted() {
    this.getData();
  },
  components: { Navbar },
};
</script>
