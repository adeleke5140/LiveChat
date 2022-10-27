<template>
    <div class="chat-window">
        <div v-if="error">
            <ErrorComponent :error="error" />
        </div>
        <div v-else>
            <section class="messages">
                <article v-for="doc in documents" :key="doc.id" class="single">
                    <span class="created-at">{{ doc.createdAt.toDate() }}</span>
                    <span class="name">{{ doc.name }}: </span>
                    <span class="message">{{ doc.message }}</span>
                </article>
            </section>
        </div>
    </div>

</template>

<script setup>
import getCollection from '../composables/getCollection';
import ErrorComponent from './ErrorComponent.vue'

const { error, documents } = getCollection('messages')

</script>

<style scoped>
.chat-window {
    margin: 20px 0;
    border: 1px solid #333;

    scroll-behavior: smooth;
    overflow: auto;
    height: 400px;
}

article {
    margin-bottom: 1em;
    position: relative;
    padding: .5em 1em;
    margin-bottom: 0;
    background-color: #fff3f3;
    /* border: 1px solid #333; */
}

article::after {
    position: absolute;
    background-color: #333;
    height: 1px;
    width: 100%;
    content: '';
    bottom: 0;
    left: 0;
}


.created-at {
    display: block;
    font-size: 10px;
}

.name {
    font-weight: bold;
    font-size: var(--font-size-smaller)
}

.message {
    font-size: var(--font-size-smaller);
}
</style>