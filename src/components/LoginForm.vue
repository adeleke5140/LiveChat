<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <label for="email">
            Email:
            <input type="text" id="email" placeholder="email" v-model="email" required>
        </label>
        <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" v-model="password" required autocomplete="true">
        </label>
        <Button text="Login" />
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { auth } from '../firebase/config'
import Button from './Button.vue';

const email = ref('')
const password = ref('')

const handleSubmit = () => {
    console.log(email.value)
}

onMounted(() => {
    if (auth.currentUser) {
        console.log(auth.currentUser.displayName, auth.currentUser)
    }
})
</script>

<style scoped>

</style> s