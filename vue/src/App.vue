<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "./routes";

export default defineComponent({
  name: "App",
  router,
});
</script>
