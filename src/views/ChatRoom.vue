<template>
    <div>
        <Navbar />
        <h1 class="container heading">Chatroom.</h1>
        <ChatWindow />
        <NewChatForm />
    </div>

</template>

<script setup>
import ChatWindow from '../components/ChatWindow.vue';
import Navbar from '../components/Navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';

</script>

<style  scoped>
.heading {
    padding: .6em .5em;
    font-weight: bold;
}
</style>