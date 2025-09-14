<script setup>
import { useRoute } from "vue-router";
import TopBar from "./components/TopBar.vue";
import SideBar from "./components/SideBar.vue";

const route = useRoute();

function getPageTitle(path) {
  if (path.includes("/students")) return "Students";
  if (path.includes("/rooms")) return "Rooms";
  if (path.includes("/payments")) return "Payments";
  if (path.includes("/settings")) return "Settings";
  return "Dashboard";
}
</script>

<template>
  <div>
    <!-- AUTH LAYOUT (login & register only) -->
    <template v-if="route.path === '/login' || route.path === '/register'">
      <main class="auth-layout">
        <div class="auth-container">
          <RouterView />
        </div>
      </main>
    </template>

    <!-- DASHBOARD LAYOUT -->
    <template v-else>
      <div class="dashboard-layout">
        <SideBar />
        <div class="main-content">
          <TopBar :title="getPageTitle(route.path)" />
          <div class="page-content">
            <RouterView />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* ... existing styles ... */

/* Dashboard Layout */
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--color-background-muted);
}

/* ✅ Remove max-width limitation for dashboard pages */
.page-content {
  flex: 1;
  padding: 0; /* Let Dashboard.vue handle its own padding */
  display: flex;
  flex-direction: column;
}
</style>
