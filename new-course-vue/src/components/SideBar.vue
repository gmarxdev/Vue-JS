<template>
    <aside class="sidebar">
        <h2 class="logo">DormSys</h2>
        <nav>
            <ul>
                <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
                <li><RouterLink to="/students">Students</RouterLink></li>
                <li><RouterLink to="/rooms">Rooms</RouterLink></li>
                <li><RouterLink to="/payments">Payments</RouterLink></li>
                <li><RouterLink to="/settings">Settings</RouterLink></li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "SideBar",
};
</script>

<style scoped>
.sidebar {
    width: 220px;
    background: var(--color-primary);
    color: var(--color-on-primary);
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.sidebar .logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
}

.sidebar nav ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sidebar nav a {
    color: var(--color-on-primary);
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: var(--radius-md);
    transition: background 0.3s;
}

.sidebar nav a:hover {
    background: var(--color-primary-dark);
}
</style>
