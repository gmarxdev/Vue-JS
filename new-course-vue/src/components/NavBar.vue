<template>
    <header class="navbar">
        <div class="logo">MyApp</div>

        <!-- Desktop Navigation -->
        <nav class="nav-links" :class="{ open: isOpen }">
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/register">Register</RouterLink>
        </nav>

        <!-- Hamburger Button (for mobile) -->
        <button class="hamburger" @click="toggleMenu" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
        isOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.5rem;
    background-color: var(--color-primary); /* ✅ Use your red theme color */
    color: var(--color-text-light);

    /* Full-width fixed navbar */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    max-height: none;
    transition: max-height 0.3s ease;
}

.nav-links a {
    text-decoration: none;
    color: var(--color-text-light);
    font-weight: 600;
}

.nav-links a:hover {
    color: var(--color-background);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--color-text-light);
    border-radius: 2px;
    transition: all 0.3s ease;
}

@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--color-primary-dark);
        text-align: center;
        max-height: 0;
        overflow: hidden;
    }

    .nav-links.open {
        max-height: 300px;
    }

    .hamburger {
        display: flex;
    }
}
</style>
