<template>
  <div class="container">
    <main>
      <div class="option-group">
        <router-link to="/agendamento">
          <h1>Serviços</h1>
          <img :src="serviceImage" alt="imagem dos serviços" />
          <h3>FORMATAÇÃO DE PC</h3>
          <h3>MANUTENÇÃO PREVENTIVA</h3>
          <h3>MANUTENÇÃO CORRETIVA</h3>
          <h3>REMOÇÃO DE VÍRUS</h3>
          <h3>TROCA DE PEÇAS</h3>
        </router-link>
      </div>

      <div class="option-group">
        <router-link to="/produtos">
          <h1>Produtos</h1>
          <img :src="productImage" alt="imagem dos produtos" />
          <h3>MOUSE</h3>
          <h3>TECLADO</h3>
          <h3>PROCESSADOR</h3>
          <h3>MEMORIA RAM</h3>
          <h3>PLACA DE VIDEO</h3>
          <h3>E MUITO MAIS...</h3>
        </router-link>
      </div>
    </main>
  </div>
</template>
<style src="./styles/Home.scss" scoped />
<script lang="ts">
import ServiceImage from "../assets/Manutencao.jpg";
import ProductImage from "../assets/hardwarepc.jpg";

export default {
  data() {
    return {
      serviceImage: ServiceImage,
      productImage: ProductImage,
    };
  },
};
</script>
