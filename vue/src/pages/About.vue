<template>
  <div class="about">
    <h1>Sobre a nossa empresa</h1>
    <p>
      A BNC é uma empresa de assistência técnica em PC que atua no mercado há
      mais de 10 anos. Durante todo esse tempo, a nossa empresa tem se dedicado
      a oferecer serviços de alta qualidade para reparar computadores
      danificados ou com defeitos.
    </p>
    <p>
      Sabemos que os computadores são equipamentos essenciais no mundo moderno e
      que são utilizados em diversas atividades do dia a dia. Por isso, a nossa
      equipe técnica é formada por profissionais altamente capacitados e
      experientes, que estão sempre atualizados com as novas tecnologias do
      mercado. Isso garante que os nossos clientes recebam um atendimento de
      excelência e que seus computadores sejam reparados com rapidez e
      eficiência.
    </p>
    <p>
      Na BNC, oferecemos uma ampla variedade de serviços de reparo de PC, desde
      a substituição de peças danificadas até a recuperação de dados perdidos.
      Também realizamos a limpeza interna dos equipamentos, a atualização de
      software e firmware, a instalação e configuração de novos programas e
      sistemas operacionais, entre outros serviços.
    </p>
  </div>
  <Footer />
</template>

<style src="./styles/About.scss" scoped />

<script lang="ts">
import Footer from "../components/footer.vue";

export default {
  components: { Footer },
};
</script>
