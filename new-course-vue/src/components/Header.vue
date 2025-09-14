<template>
    <header class="navbar">
        <div class="logo">MyApp</div>

        <!-- Desktop Navigation -->
        <nav class="nav-links" :class="{ open: isOpen }">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
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
    name: "Header",
    data() {
        return {
        isOpen: false, // Tracks mobile menu state
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
/* ===== Base Navbar Styles ===== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.5rem;
    background-color: var(--vt-c-indigo);
    color: white;

    /* Full-width fixed navbar */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

/* ===== Desktop Links ===== */
.nav-links {
    display: flex;
    gap: 1.5rem;

    /* For animation (applies only on mobile when hidden) */
    max-height: none;
    transition: max-height 0.3s ease;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #1abc9c;
}

/* ===== Hamburger Button ===== */
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
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
}

/* ===== Mobile Styles ===== */
@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #34495e;
        text-align: center;

        /* Hide by default */
        max-height: 0;
        overflow: hidden;
    }

    .nav-links.open {
        max-height: 300px; /* smooth slide down */
    }

    .hamburger {
        display: flex;
    }
}
</style>
