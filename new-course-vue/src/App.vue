<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div>
    <Header />

    <main>
        <!-- ✅ This is where your pages (Login.vue, Register.vue) will be shown -->
        <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 1rem;
}
</style>
