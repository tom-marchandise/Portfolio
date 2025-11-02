<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    radius: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
    shadowSize: number
    borderSize: number
}>()

const radiusMap = {
  'xs': '2px',
  'sm': '4px',
  'md': '6px',
  'lg': '8px',
  'xl': '12px',
  '2xl': '16px',
  '3xl': '24px',
  '4xl': '32px'
}

const computedStyles = computed(() => {
  return {
    'border-width': `${props.borderSize}px`,
    'border-radius': radiusMap[props.radius],
    'box-shadow': `${props.shadowSize}px ${props.shadowSize}px 0px var(--color-shadow)`
  }
})
</script>

<template>
    <div class="bg-background border-border" :style="computedStyles">
        <slot />
    </div>
</template>
