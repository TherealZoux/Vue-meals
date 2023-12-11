<template>
  <div class="flex flex-col p-8">
    <div>
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-72"
        placeholder="Search for Meals"
      />
    </div>
    <div class="flex gap-1">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.meals);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

<style scoped></style>
