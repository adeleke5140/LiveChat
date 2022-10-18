<template>
    <form @submit.prevent="handleSubmit">
        <h3>Register</h3>
        <!-- <label for="username">
            Username:
            <input type="text" id="username" placeholder="Display name" v-model="username" required>
        </label> -->
        <label for="email">
            Email:
            <input type="email" id="email" placeholder="email" v-model="email" required>
        </label>
        <label for="password">
            Password:
            <input type="password" id="password" placeholder="password" v-model="password" required autocomplete="true">
        </label>
        <button>
            <span v-if="isPending" class="pending"></span>
            <span v-else>Sign up</span>
        </button>
    </form>
    <div class="container error" v-if="error">
        {{ error }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useSignup from '../composables/useSignup';

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
.pending {
    display: block;
    width: 20px;
    height: 20px;
    border: 3px solid #eee;
    border-radius: 50%;
    border-top-color: #333;
    animation: spin 1s ease infinite;
    margin: 0 auto;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.error {
    font-weight: bold;
    font-size: 8px;
}
</style> 