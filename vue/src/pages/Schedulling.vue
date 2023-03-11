<template>
  <Navbar />
  <form @submit.prevent="handleSubmit">
    <div class="formGroup">
      <h1>Agendamento</h1>
      <div class="inputContainer">
        <label>
          Nome
          <input type="text" v-model="client" />
        </label>
      </div>

      <div class="inputContainer">
        <label>Data</label>
        <input type="date" v-model="schedule" />
        <select id="timeSelect" v-model="hour">
          <option value="" disabled selected>hora</option>
          <option value="08:00">08:00</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
        </select>
      </div>
      <div class="inputContainer">
        <label>Serviços</label>
        <select v-model="services">
          <option value="" disabled selected>Selecione o serviço</option>
          <option value="Formatação de PC">Formatação de PC</option>
          <option value="Manutenção preventiva">Manutenção preventiva</option>
          <option value="Manutenção corretiva">Manutenção corretiva</option>
          <option value="Remoção de vírus">Remoção de vírus</option>
          <option value="Troca de peças">Troca de peças</option>
        </select>
      </div>
      <div class="inputContainer">
        <label>
          Celular
          <input type="text" v-model="cellphone" />
        </label>
      </div>
      <div class="inputContainer">
        <label>
          Endereço
          <input type="text" v-model="address" />
        </label>
      </div>

      <button type="submit">Enviar</button>
    </div>
  </form>
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
      services: "",
    };
  },
  methods: {
    async handleSubmit() {
      const payload = {
        client: this.client,
        schedule: this.schedule,
        cellphone: this.cellphone,
        address: this.address,
        hour: this.hour,
        services: this.services,
      };
      try {
        const token = localStorage.getItem("token");
        const response = await api.post("/schedule", payload, {
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
  components: { Navbar },
});
</script>
<style src="./styles/Schedulling.scss" scoped />
