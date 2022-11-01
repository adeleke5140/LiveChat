<template>
    <div class="home">
        <h1>Welcome to LiveChat</h1>
        <HomeComponent />
    </div>
</template>

<script setup>
import HomeComponent from '../components/HomeComponent.vue';


</script>

<style scoped>
div.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    font-weight: bold;
    font-family: var(--font-family2);
    font-size: 2.4em;
}
</style>