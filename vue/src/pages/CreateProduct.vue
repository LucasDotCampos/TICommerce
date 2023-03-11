<template>
  <form @submit.prevent="handleSubmit">
    <h1>Form</h1>
    <label>
      Nome:
      <input type="text" v-model="name" />
    </label>

    <label>
      Preço
      <input type="text" v-model="price" />
    </label>
    <label>
      Quantidade
      <input type="text" v-model="quantity" />
    </label>
    <label>
      Descrição
      <input type="text" v-model="description" />
    </label>

    <input
      id="fileInput"
      type="file"
      ref="fileInput"
      class="fileInput"
      @change="handleFileChange"
    />
    <label for="fileInput" class="labelInput"> Envie a foto </label>

    <button type="submit">Enviar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "../services/api";

export default defineComponent({
  data() {
    return {
      name: "",
      price: "",
      quantity: "",
      description: "",
      file: null as File | null,
    };
  },
  methods: {
    handleFileChange(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        this.file = fileInput.files[0];
      } else {
        this.file = null;
      }
    },
    async handleSubmit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("quantity", this.quantity);
      formData.append("description", this.description);
      formData.append("image", this.file!);

      try {
        const token = localStorage.getItem("token");
        const response = await api.post("/product", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
<style src="./styles/CreateProduct.scss" scoped />
