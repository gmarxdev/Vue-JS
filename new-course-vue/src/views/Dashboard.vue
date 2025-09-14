<template>
    <div class="dashboard-container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <h2 class="logo">DormSys</h2>
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Students</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Top Bar -->
            <header class="top-bar">
                <h1>Dashboard</h1>
                <button class="logout-btn">Logout</button>
            </header>

            <!-- Content Section -->
            <section class="content">
                <div class="card">
                    <h3>Total Students</h3>
                    <p>120</p>
                </div>
                <div class="card">
                    <h3>Available Rooms</h3>
                    <p>15</p>
                </div>
                <div class="card">
                    <h3>Pending Payments</h3>
                    <p>8</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
};
</script>

<style scoped>
/* Layout */
.dashboard-container {
    display: flex;
    min-height: 100vh;
    background: var(--color-background-muted);
}

/* Sidebar */
.sidebar {
    width: 220px;
    background: var(--color-primary);
    color: var(--color-text-light);
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
    color: var(--color-text-light);
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 6px;
    transition: background 0.3s;
}

.sidebar nav a:hover {
    background: var(--color-primary-dark);
}

/* Main Content */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Top Bar */
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-border);
}

.logout-btn {
    background: var(--color-primary);
    color: var(--color-text-light);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.logout-btn:hover {
    background: var(--color-primary-dark);
}

/* Dashboard Cards */
.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    padding: 2rem;
}

.card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    text-align: center;
}

.card h3 {
  margin-bottom: 0.5rem;
}
</style>
