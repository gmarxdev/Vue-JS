<template>
    <header class="top-bar">
        <h1>{{ title }}</h1>

        <div class="actions">
            <RouterLink to="/profile" class="profile-btn">Profile</RouterLink>
            <button class="logout-btn" @click="logout">Logout</button>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopBar",
    props: {
        title: {
            type: String,
            default: "Dashboard",
        },
    },
    methods: {
        logout() {
            // TODO: Replace this with real logout logic
            alert("Logging out...");
        },
    },
};
</script>

<style scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-surface);
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-border);
}

.actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.profile-btn {
    background: transparent;
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: none;
}

.logout-btn {
    background: var(--color-primary);
    color: var(--color-on-primary);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background 0.3s;
}

.logout-btn:hover {
    background: var(--color-primary-dark);
}
</style>
