<template>
    <button>
        <span v-if="isPending" class="pending"></span>
        <span v-else>{{ text }}</span>
    </button>
</template>

<script setup>
const props = defineProps(['isPending', 'text'])
</script>

<style scoped>
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