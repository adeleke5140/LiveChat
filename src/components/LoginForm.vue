<template>

    <Transition name="slide-fade">
        <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <label for="email">
                Email:
                <input type="text" id="email" placeholder="email" v-model="email" required>
            </label>
            <label for="password">
                Password:
                <input type="password" id="password" placeholder="password" v-model="password" required
                    autocomplete="true">
            </label>
            <Button text="Login" :isPending="isPending" />
        </form>
    </Transition>
    <ErrorComponent :error="error" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useLogin from '../composables/useLogin';
import { auth } from '../firebase/config'
import Button from './Button.vue';
import ErrorComponent from './ErrorComponent.vue';

const emit = defineEmits(['login'])

const email = ref('')
const password = ref('')

const { login, error, isPending } = useLogin()

const handleSubmit = async () => {
    await login(email.value, password.value)
    if (!error.value) {
        console.log('User loggedin')
        emit('login')
    }

}

onMounted(() => {
    if (auth.currentUser) {
        console.log(auth.currentUser.displayName, auth.currentUser)
    }
})
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style> s