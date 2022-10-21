<template>
    <div>
        <h1 class="container profile">Profile</h1>
        <form @submit.prevent="updateUsername">
            <h3>Add a Username</h3>
            <label for="username">
                <input type="text" id="username" placeholder="username" required v-model="username">
            </label>
            <Button text="Update" :isPending="isPending" />
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase/config'
import { updateProfile } from 'firebase/auth'
import Button from './Button.vue';
import delay from '../composables/delay';


const router = useRouter()
const username = ref('')

const user = ref(null)
const isPending = ref(false)

onMounted(() => {
    user.value = auth.currentUser
})


const updateUsername = async () => {
    isPending.value = true
    await updateProfile(user.value, {
        displayName: username.value
    })
    delay(3000).then(() => isPending.value = false)
    router.push({ name: "chatroom " })
}


</script>

<style scoped>
.profile {
    padding: .3em .6em;
}
</style>