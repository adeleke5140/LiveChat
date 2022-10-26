<template>
  <div>
    <Navbar />
    <h1 class="container heading">Chatroom</h1>
    <NewChatForm />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import NewChatForm from "../components/NewChatForm.vue"
</script>

<style scoped>
.heading {
  padding: 0.3em 0.6em;
  font-weight: bold;
}
</style>
