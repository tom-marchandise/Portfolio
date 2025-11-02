<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
    text: string
    prependIcon?: string
    appendIcon?: string
    tag?: 'button' | 'a'
}>()
</script>
<template>
    <component 
        :is="tag || 'button'"
        vInBind="$attrs"
        class="flex justify-center lg:text-lg xl:text-xl items-center gap-1 cursor-pointer bg-secondary  text-black px-3 py-1.5 border-2 border-border shadow-[3px_3px_0_0_var(--color-shadow)] font-bold transition-all duration-250 hover:shadow-[6px_6px_0_0_var(--color-shadow)] hover:translate-[-3px] active:shadow-none active:translate-[5px] active:duration-0"
    >
        <Icon v-if="prependIcon" :icon-name="prependIcon" />
        {{ text }}
        <Icon v-if="appendIcon" :icon-name="appendIcon"/>
    </component>
</template>
