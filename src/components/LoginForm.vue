<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <label for="displayName">
            Username:
            <input type="text" id="displayName" placeholder="display name" v-model="displayName" required>
        </label>
        <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" v-model="password" required>
        </label>
        <button>Login </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';


const displayName = ref('')
const password = ref('')

const handleSubmit = () => {
    console.log(displayName.value)
}
</script>

<style scoped>

</style> s