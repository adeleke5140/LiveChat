<template>
    <div class="chat-window">
        <div v-if="error">
            <ErrorComponent :error="error" />
        </div>
        <div class="parent" ref="messages">
            <div v-if="isPending" class="loader">
                <span class="pending"></span>
                <span>loading...</span>
            </div>
            <section v-else class="messages">
                <article v-for="doc in formattedDocuments" :key="doc.id" class="single">
                    <span class="row">
                        <span class="name">{{ doc.name }} </span>
                        <span class="created-at">{{ doc.createdAt }} ago</span>
                    </span>
                    <span class="message">{{ doc.message }}</span>
                </article>

            </section>
        </div>

    </div>

</template>

<script setup>
import getCollection from '../composables/getCollection';
import ErrorComponent from './ErrorComponent.vue'
import { formatDistanceToNow } from 'date-fns'
import { computed } from '@vue/reactivity';
import { onUpdated, ref } from 'vue'
import Button from './Button.vue';


const { error, documents, isPending } = getCollection('messages')

const messages = ref(null)

onUpdated(() => {
    messages.value.scrollTop = messages.value.scrollHeight
})

//computed properties are really cool
const formattedDocuments = computed(() => {
    if (documents.value) {
        return documents.value.map(doc => {
            let time = formatDistanceToNow(doc.createdAt.toDate())
            return { ...doc, createdAt: time }
        })
    }
})

</script>

<style scoped>
.chat-window {
    margin: 20px 0;
    border: 1px solid #333;
    scroll-behavior: smooth;
}

.parent {
    height: auto;
    overflow: auto;
    height: 50vh;
    position: relative;
}

.loader {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}

.loader span {
    font-size: var(--font-size-smaller);
}



article {
    margin-bottom: 1em;
    position: relative;
    padding: .5em 1em;
    margin-bottom: 0;
    /* background-color: #fff3f3; */
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

article:last-child::after {
    height: 0;
}


span.row {
    display: flex;
    align-items: center;
}

.created-at {
    display: block;
    font-size: 8px;
}

.name {
    font-weight: bold;
    font-size: var(--font-size-smaller);
    margin-right: .6em;
}

.message {
    font-size: var(--font-size-smaller);
    display: block;
    margin-top: -.2em;
}



.pending {
    display: block;
    width: 20px;
    height: 20px;
    border: 3px solid #eee;
    border-radius: 50%;
    border-top-color: #333;
    animation: spin 1s ease infinite;
    margin: 0 auto;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>