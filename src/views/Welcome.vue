<script setup>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';

const showLogin = ref(true)
</script>

<template>
  <main>
    <div class="container">
      <h1>LiveChat</h1>
      <p>Chat with friends in real-time about your favorite tvShows, Movies and books.</p>
    </div>

    <div v-if="showLogin">
      <LoginForm />
      <p>No account yet? <span class="signup" @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <SignupForm />
      <p>Already registered? <span class="signup" @click="showLogin = true">Login</span> instead.</p>
    </div>
  </main>
</template>


<style scoped>
h1 {
  font-weight: 600;
  font-family: var(--font-family2);
}


p {
  font-size: var(--font-size-smaller);
}

.signup {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}
</style>