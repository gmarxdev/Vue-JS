<template>
    <div class="dashboard-wrapper">
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
</template>

<script>
export default {
    name: "Dashboard",
};
</script>

<style scoped>
.dashboard-wrapper {
    flex: 1; /* ✅ Take full available space */
    display: flex;
    flex-direction: column;
}

/* Dashboard Cards */
.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 2rem;
    width: 100%; /* ✅ Fill width */
    box-sizing: border-box;
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
