<template>
    <aside :class="['sidebar', { open: isOpen }]">
        <!-- Logo / Title -->
        <div class="sidebar-header">
            <h2 class="logo">DormSys</h2>

            <!-- Hamburger (Only visible on mobile) -->
            <button class="hamburger" @click="toggleSidebar">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <!-- Navigation -->
        <nav>
            <ul>
                <li><RouterLink to="/dashboard" @click="closeSidebar">Dashboard</RouterLink></li>
                <li><RouterLink to="/students" @click="closeSidebar">Students</RouterLink></li>
                <li><RouterLink to="/rooms" @click="closeSidebar">Rooms</RouterLink></li>
                <li><RouterLink to="/payments" @click="closeSidebar">Payments</RouterLink></li>
                <li><RouterLink to="/settings" @click="closeSidebar">Settings</RouterLink></li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "SideBar",
    data() {
        return {
        isOpen: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
        closeSidebar() {
            this.isOpen = false; // Close when a link is clicked
        },
    },
};
</script>

<style scoped>
/* ===== Base Sidebar Styles ===== */
.sidebar {
    width: 220px;
    background: var(--color-primary);
    color: var(--color-text-light);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: transform 0.3s ease-in-out;
}

/* Sidebar Header (Logo + Toggle Button) */
.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

/* Navigation */
nav ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
}

nav a {
    color: var(--color-text-light);
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 6px;
    transition: background 0.3s;
}

nav a:hover {
    background: var(--color-primary-dark);
}

/* ===== Mobile Styles ===== */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger span {
    width: 22px;
    height: 3px;
    background: white;
    border-radius: 2px;
}

@media (max-width: 768px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        transform: translateX(-100%);
        z-index: 1000;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .hamburger {
        display: flex;
    }
}
</style>
