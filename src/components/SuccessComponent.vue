<template>
    <Transition name="fade">
        <div class="success" v-if="success" :style="{ marginTop: marginTop + 'em' }">
            <p class="success-message">{{ message }}</p>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['success', 'message', 'marginTop'])
console.log(props.marginTop)
</script>

<style scoped>
div {
    /* margin-top: em; */
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