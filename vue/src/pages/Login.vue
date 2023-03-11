<template>
  <Navbar />
  <form className="formContainer" @submit.prevent="sendData">
    <div className="formGroup">
      <h1>Login</h1>

      <div className="inputContainer">
        <label htmlFor="cpf">CPF</label>
        <input type="text" placeholder="ex: 00000000000" v-model="cpf" />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="ex: !@#$%1542test"
          v-model="password"
        />
      </div>
      <button type="submit">Enviar</button>
    </div>
  </form>
</template>

<style src="./styles/Login.scss" lang="scss" scoped />

<script lang="ts">
import Navbar from "../components/navbar.vue";
import { api } from "../services/api";

export default {
  data() {
    return {
      cpf: "",
      password: "",
    };
  },
  methods: {
    async sendData() {
      try {
        const response = await api.post("/session", {
          cpf: this.cpf,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: { Navbar },
};
</script>
