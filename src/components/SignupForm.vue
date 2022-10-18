<template>
    <form @submit.prevent="handleSubmit">
        <h3>Register</h3>
        <label for="username">
            Username:
            <input type="text" id="username" placeholder="display name" v-model="username" required>
        </label>
        <label for="email">
            Email:
            <input type="email" id="email" placeholder="email" v-model="email" required>
        </label>
        <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" v-model="password" required autocomplete="true">
        </label>
        <button>Sign up</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';


const username = ref('')
const password = ref('')
const email = ref('')

const handleSubmit = () => {
    console.log(username.value)
}
</script>

<style scoped>
h3 {
    font-family: var(--font-family2);
    font-weight: bold;

}
</style> 