<template>
  <div>
    <h1>My Name is {{ name }} {{ lastName }}</h1>
    <input type="text" v-model="newName" />
    <input type="text" v-model="newLastName" />
    <button @click="updateName">Update Name</button>
  </div>
</template>

<script lang="ts">
import { useStore } from "../store";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const newName = ref("");
    const newLastName = ref("");

    const updateName = () => {
      store.setName(newName.value);
      store.setLastName(newLastName.value);
      console.log(store.name);
    };

    return {
      name: store.name,
      lastName: store.lastName,
      newName,
      newLastName,
      updateName,
    };
  },
});
</script>
