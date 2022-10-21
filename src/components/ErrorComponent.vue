<template>
    <Transition name="slide-fade">
        <div class="container error" v-if="error">
            <span class="material-icons md-18 icon">
                report_problem
            </span>
            <span>{{ error }}</span>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['error'])
</script>

<style scoped>
.error {
    font-weight: bold;
    font-size: 10px;
    display: flex;
    align-items: center;
}

.icon {
    margin-right: .4em;
    font-size: 15px;
}


.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>