<template>
  <form className="formContainer" @submit.prevent="sendData">
    <div className="formGroup">
      <h1>Login</h1>

      <div className="inputContainer">
        <label htmlFor="cpf">email</label>
        <input
          type="text"
          placeholder="ex: johndoe@johndoe.com"
          v-model="email"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="ex: !@#$%1542test"
          v-model="password"
        />
      </div>
      <a href="#">Não tem conta?</a>
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
      email: "",
      password: "",
    };
  },
  methods: {
    async sendData() {
      try {
        const response = await api.post("/session", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
