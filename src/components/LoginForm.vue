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
import { onMounted, ref } from 'vue';
import { auth } from '../firebase/config'

const displayName = ref('')
const password = ref('')

const handleSubmit = () => {
    console.log(displayName.value)
}

onMounted(() => {
    console.log(auth.currentUser.displayName, auth.currentUser)
})
</script>

<style scoped>

</style> s