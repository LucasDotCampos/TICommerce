import { defineStore } from "pinia";

interface State {
  name: string;
  lastName: string;
}

export const useStore = defineStore({
  id: "store",
  state: (): State => ({
    name: "",
    lastName: "",
  }),
  actions: {
    setName(newName: string) {
      this.name = newName;
    },
    setLastName(newLastName: string) {
      this.lastName = newLastName;
    },
  },
});
