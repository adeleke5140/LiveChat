<template>
    <!-- <Account /> -->
    <h1>
        <span class="material-symbols-outlined">
            construction
        </span>
        Work in Progress...
    </h1>
    <RouterLink :to="{ name: 'chatroom' }">
        <div class="back">
            <span class="material-symbols-outlined">
                undo
            </span>
            Back to the Chatroom
        </div>
    </RouterLink>
</template>

<script setup>

import { RouterLink } from 'vue-router';
import Account from '../components/Account.vue'

</script>

<style scoped>
a {
    display: block;
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
</style>