<script setup>

import TopBar from './components/TopBar.vue'

import { useRoute } from "vue-router";
const route = useRoute();

</script>

<template>
  <div>
    <TopBar v-if="route.path !== '/login' && route.path !== '/register'" />

    <main>
      <div class="page-container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.page-container {
  width: 100%;
  max-width: 500px; /* Prevents forms from being too wide */
}
</style>
