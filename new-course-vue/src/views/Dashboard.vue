<template>
    <div class="dashboard-layout">
        <SideBar />
        <div class="main-content">
            <TopBar />
            <section class="content">
                <!-- Your dashboard cards here -->
            </section>
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";

export default {
    components: { SideBar, TopBar },
};
</script>

<style scoped>
    .dashboard-layout {
        display: flex;
        min-height: 100vh;
    }
    .main-content {
        flex: 1;
        background: var(--color-background-muted);
        display: flex;
        flex-direction: column;
    }
</style>
