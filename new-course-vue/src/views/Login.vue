<template>
    <div class="form-container">
        <h2>Login</h2>

        <form @submit.prevent="handleLogin">
            <div class="input-group">
                <label for="email">Email</label>
                <input v-model="email" id="email" type="email" placeholder="Enter your email" required />
            </div>

        <div class="input-group">
                <label for="password">Password</label>
                <input v-model="password" id="password" type="password" placeholder="Enter your password" required />
        </div>

            <button type="submit" class="btn">Login</button>
        </form>

            <p class="link-text">
            Don't have an account?
            <router-link to="/register">Register here</router-link>
            </p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
    console.log("Login submitted:", { email: email.value, password: password.value });
    alert("Login successful!");
};
</script>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 80px auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 1rem;
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
}

input {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #1abc9c;
    box-shadow: 0 0 4px rgba(26, 188, 156, 0.3);
}

.btn {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;
}

.btn:hover {
    background-color: #16a085;
}

.link-text {
    text-align: center;
    margin-top: 1rem;
}
</style>
