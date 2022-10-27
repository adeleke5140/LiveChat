<template>
    <form>
        <textarea class="text-area" name="chat" id="chat" v-model="message" @keypress.enter.prevent="handleSubmit"
            placeholder="Share your thought..."></textarea>
    </form>
    <ErrorComponent :error="error" />
    <SuccessComponent :success="success" />
</template>

<script setup>
import { ref } from 'vue';
import delay from '../composables/delay';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';
import { timestamp } from '../firebase/config'
import ErrorComponent from './ErrorComponent.vue';
import SuccessComponent from './SuccessComponent.vue';

const message = ref('')
const { user } = getUser()
const { addDocument, error } = useCollection('messages')

const success = ref(false)
//all we are doing is saving all of the chats
//in a firestore database
const handleSubmit = async () => {
    if (user) {
        const chat = {
            message: message.value,
            name: user.value.displayName,
            createdAt: timestamp
        }
        await addDocument(chat)
        if (!error.value) {
            success.value = true
            delay(1000).then(() => success.value = false)
            message.value = ''
        }
    }
}
</script>

<style scoped>
form {
    padding: 0;
    border: none;
}

textarea {
    border: none;
    font-family: inherit;
    width: 100%;
    max-width: 100%;
    height: 2.5em;
    border: 1px solid #333;
    resize: none;
    padding: .5em;
}


.text-area:focus {
    outline: none
}

.text-area:focus-visible {
    outline: 1px solid #333
}

.text-area:focus:not(:focus-visible) {
    outline: none;
}
</style>