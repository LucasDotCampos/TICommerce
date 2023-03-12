<template>
  <div class="carousel-container">
    <div class="slides-container">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
      >
        <h2>Slide {{ index + 1 }}</h2>
      </div>
    </div>
    <div class="buttons-container">
      <button @click="goToAgendamento">Agendamento</button>
      <button @click="goToProdutos">Produtos</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Carousel",
  setup() {
    const router = useRouter();

    const slides = [1, 2, 3];
    const currentSlide = ref(0);

    const goToAgendamento = () => {
      router.push("/agendamento");
    };

    const goToProdutos = () => {
      router.push("/produtos");
    };

    return {
      slides,
      currentSlide,
      goToAgendamento,
      goToProdutos,
    };
  },
});
</script>

<style lang="scss" scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.slides-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  h2 {
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin-top: 50px;
  }

  &.active {
    opacity: 1;
  }
}

.buttons-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #222;
    color: #fff;
    cursor: pointer;
  }
}
</style>
