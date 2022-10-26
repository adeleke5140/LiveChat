<template>
  <div>
    <Navbar />
    <h1 class="container heading">The Chatroom</h1>
    <NewChatForm />
    <Button
      text="Get all Documents"
      :isPending="isLoading"
      @click="getAllMessages"
    />
    <ErrorComponent :error="error" />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import NewChatForm from "../components/NewChatForm.vue"
import getCollection from "../composables/getCollection"
import Button from "../components/Button.vue"
import ErrorComponent from "../components/ErrorComponent.vue"

const { error, isLoading, getDocument } = getCollection()

const getAllMessages = async () => {
  const results = await getDocument("messages")
  let message = []
  if (!error.value) {
    results.forEach((doc) => {
      message.push(doc.data())
    })
  }

  message.map((data) => {
    console.log(data.name, "=>", data.message)
  })
}
</script>

<style scoped>
.heading {
  padding: 0.3em 0.6em;
  font-weight: bold;
}
</style>
