<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'home' }" class="flex items-center h-full px-5">
        Home
      </router-link>
      <div class="flex justify-between items-center gap-4">
        <router-link
          to="/"
          class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
        >
          Search Meals
        </router-link>
        <router-link
          to="/"
          class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
        >
          Search By Letter
        </router-link>
        <router-link
          to="/"
          class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
