<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div>
    <Header />

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
