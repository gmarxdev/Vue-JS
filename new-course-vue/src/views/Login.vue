<template>
    <div class="form-container">
        <h2>Login</h2>

        <form @submit.prevent="handleLogin">
            <div class="input-group">
                <label for="email">Email</label>
                <input v-model="email" id="email" type="email" placeholder="email@example.com" required />
            </div>

        <div class="input-group">
                <label for="password">Password</label>
                <input v-model="password" id="password" type="password" placeholder="Enter your password" required />
        </div>

            <button type="submit" class="btn">Login</button>
        </form>

            <p class="link-text">
            Don't have an account?
            <router-link to="/register"><b>Register here</b></router-link>
            </p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
    console.log("Login submitted:", { email: email.value, password: password.value });
    alert("Login successful!");
    router.push('./dashboard');
};
</script>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 80px auto;
    padding: 2rem;
    background: var(--color-background);
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--color-primary);
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

label {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    font-weight: 600;
    color: var(--color-text);
}

input {
    background: var(--color-background-muted);
}

input:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 4px rgba(229, 57, 53, 0.3);
}

/* ✅ FIX: Use theme colors, no hardcoded green */
.btn {
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border: none;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;
}

.btn:hover {
    background-color: var(--color-primary-dark);
}

.link-text {
    text-align: center;
    margin-top: 1rem;
}
</style>
