<template>
    <div class="form-container">
        <h2>Register</h2>

        <form @submit.prevent="handleRegister">
        <div class="input-group">
            <label for="firstName">First Name</label>
            <input v-model="firstName" id="firstName" type="text" placeholder="Enter your first name" required />
        </div>

        <div class="input-group">
            <label for="lastName">Last Name</label>
            <input v-model="lastName" id="lastName" type="text" placeholder="Enter your last name" required />
        </div>

        <div class="input-group">
            <label for="email">Email</label>
            <input v-model="email" id="email" type="email" placeholder="Enter your email" required />
        </div>

        <div class="input-group">
            <label for="birthday">Birthday</label>
            <input v-model="birthday" id="birthday" type="date" required />
        </div>

        <div class="input-group">
            <label for="phone">Phone Number</label>
            <input v-model="phone" id="phone" type="tel" placeholder="Enter your phone number" required />
        </div>

        <button type="submit" class="btn">Register</button>
        </form>

        <p class="link-text">
        Already have an account?
        <router-link to="/login">Login here</router-link>
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const birthday = ref("");
const phone = ref("");

const handleRegister = () => {
    console.log("Registration submitted:", {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        birthday: birthday.value,
        phone: phone.value,
    });
    alert("Registration successful!");
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
