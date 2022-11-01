<template>
    <div>
        <h1 class="heading">My Account</h1>

        <section class="userInfo">
            <div class="currentdetail">
                <div class="name">
                    <span class="username">Username</span> :
                    <span>{{ userName }}</span>
                </div>
                <div class="email">
                    <span class="email">Email: </span>
                    <span>{{ email }}</span>
                </div>
            </div>
            <form @submit.prevent="handleUpdate">
                <h2>Update Username</h2>
                <input type="text" v-model="newName" required>
                <Button text="Update" :isPending="isLoading" />
            </form>
        </section>
        <div v-show="updateError">
            <ErrorComponent :error="updateError" />
        </div>
        <RouterLink :to="{ name: 'chatroom' }">
            <div class="back">
                <span class="material-symbols-outlined">
                    undo
                </span>
                Back to the Chatroom
            </div>
        </RouterLink>
        <div>
            <SuccessComponent :success='success' message="Username update successful!!" :marginTop="1" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import { RouterLink, useRouter } from 'vue-router'
import getNewUserName from '../composables/updateUsername';
import Button from './Button.vue'
import ErrorComponent from './ErrorComponent.vue';
import SuccessComponent from './SuccessComponent.vue';
import delay from '../composables/delay';
import { db } from '../firebase/config'
import { setDoc, doc, updateDoc } from '@firebase/firestore';


const router = useRouter()

const userName = ref(null)
const newName = ref(null)

const email = ref(null)

const success = ref(false)
const { user } = getUser()
const { updateUsername, isLoading, error: updateError } = getNewUserName()

userName.value = user.value.displayName
email.value = user.value.email
const handleUpdate = async () => {
    isLoading.value = true
    const data = {
        displayName: newName.value
    }

    await updateUsername(data)
    if (!updateError.value) {
        newName.value = ''
        success.value = true;
        delay(2000).then(() => {
            success.value = false
            setTimeout(() => {
                router.go()
            }, 1000)
        })

    }
}



</script>

<style scoped>
h1 {
    font-weight: bold;
    border: 1px solid #333;
    padding: .5em .5em;
    margin-bottom: 1em;

}

a {
    display: block;
}

.currentdetail {
    border: 1px solid #333;
    padding: 1em;
}

h1,
h2 {
    font-family: var(--font-family2);
}

h2 {
    font-size: var(--font-size-general);
    font-weight: bold;
    margin-bottom: 1em;
}

.username,
.email {
    font-weight: bold;
}

.back {
    display: flex;
    align-items: center;
    font-size: var(--font-size-smaller);
    cursor: pointer
}

.material-symbols-outlined {
    font-size: var(--font-size-smaller);
    color: var(--link-color)
}

/* div.success {
    margin-top: 3em;
} */
</style>