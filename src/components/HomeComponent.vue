<template>
    <div>
        <p>
            The Chatroom awaits yonder:
        </p>
        <Button text="Enter" @click="gotoChatroom" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from './Button.vue'


const router = useRouter()

const gotoChatroom = () => {
    router.push({ name: 'chatroom' })
}
</script>

<style lang="scss" scoped>

</style>