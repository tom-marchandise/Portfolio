<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
    text: string
    prependIcon?: string
    appendIcon?: string
    tag?: 'button' | 'a'
    prependIconClass?: string
    appendIconClass?: string
}>()
</script>
<template>
    <component 
        :is="tag || 'button'"
        vInBind="$attrs"
        class="cursor-pointer lg:text-lg xl:text-xl bg-primary inline-block text-black 
        px-3 py-1.5 border-2 border-border shadow-[3px_3px_0_0_var(--color-shadow)] 
        font-bold transition-all duration-250 hover:shadow-[6px_6px_0_0_var(--color-shadow)] 
        hover:translate-[-3px] active:shadow-none active:translate-[5px] active:duration-0  
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0_0_var(--color-shadow)] 
        disabled:hover:translate-0 disabled:active:shadow-[3px_3px_0_0_var(--color-shadow)] 
        disabled:active:translate-0"
    >
        <Icon v-if="prependIcon" :icon-name="prependIcon" :class="prependIconClass" />
        {{ text }}
        <Icon v-if="appendIcon" :icon-name="appendIcon" :class="appendIconClass" />
    </component>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.icon-spin {
  animation: spin 1s linear infinite;
  display: inline-block;
}
</style>