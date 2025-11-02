<script setup lang="ts">
defineProps<{
    title: string
    description: string
}>()
</script>

<template>
    <div>
        <h2 class="uppercase text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-wider">{{ title }}</h2>
        <p class="text-center sm:text-lg lg:text-xl xl:text-2xl">{{ description }}</p>
    </div>
</template>
