<template>
    <header>
        <nav class="navbar">
            <div class="logo">
                <h1>MyApp</h1>
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    background: #2c3e50;
    color: #fff;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
.logo h1 {
    margin: 0;
    font-size: 1.5rem;
}
.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}
.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}
.nav-links a:hover {
    color: #42b983;
}
</style>