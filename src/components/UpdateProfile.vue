<template>
    <div>
        <h1 class="container profile">Profile</h1>
        <form @submit.prevent="updateUsername">
            <h3>Add a Username</h3>
            <label for="username">
                <input type="text" id="username" placeholder="username" required v-model="username">
            </label>
            <button>Update</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase/config'
import { updateProfile } from 'firebase/auth'


const router = useRouter()
const username = ref('')

const user = ref(null)

onMounted(() => {
    user.value = auth.currentUser
})

const updateUsername = async () => {
    await updateProfile(user.value, {
        displayName: username.value
    })
    router.push('/')
    console.log(user.value.displayName)
}


</script>

<style scoped>
.profile {
    padding: .3em .6em;
}
</style>