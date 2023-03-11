<template>
  <div>
    <label for="timeSelect">Select a time:</label>
    <select id="timeSelect" v-model="selectedTime">
      <option value="13:00">13:00</option>
      <option value="14:00">14:00</option>
    </select>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const selectedTime = ref<string>("13:00");

    const submitForm = () => {
      console.log(`Selected time: ${selectedTime.value}`);
    };

    return { selectedTime, submitForm };
  },
});
</script>
