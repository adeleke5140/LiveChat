<template>
    <form @submit.prevent="handleSubmit">
        <h3>Register</h3>
        <label for="email">
            Email:
            <input type="email" id="email" placeholder="email" v-model="email" required>
        </label>
        <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" v-model="password" required autocomplete="true">
        </label>
        <Button text="Sign up" :isPending="isPending" />
    </form>
    <ErrorComponent :error="error" />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useSignup from '../composables/useSignup';
import Button from './Button.vue';
import ErrorComponent from './ErrorComponent.vue';


const router = useRouter()
const username = ref('')
const password = ref('')
const email = ref('')

const { signUp, error, isPending } = useSignup()

const handleSubmit = async () => {
    await signUp(email.value, password.value, username.value);

    if (!error.value) {
        router.push('/profile')
    }
}
</script>

<style scoped>

</style> 