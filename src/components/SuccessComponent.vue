<template>
    <Transition name="fade">
        <div v-if="success">
            <p class="success-message">Message Posted!</p>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['success'])
</script>

<style scoped>
div {
    margin-top: -1em;
    border: 1px solid #333;
    padding: .5em;
}

.success-message {
    font-size: var(--font-size-smaller);
    font-weight: bold;
}

.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>