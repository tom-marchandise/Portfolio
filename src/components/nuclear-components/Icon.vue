<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

defineProps<{
    iconName: string
}>()

const tooltiptext = useTemplateRef('tooltiptext')
const visibleTimeout = ref<number | undefined>()
const hiddenTimeout = ref<number | undefined>()

const mouseEnter = () => {
    clearTimeout(hiddenTimeout.value)
    visibleTimeout.value = setTimeout(() => {
        if (!tooltiptext.value) return
        tooltiptext.value.style.visibility = 'visible'
    }, 1500)
}

const mouseLeave = () => {
    clearTimeout(visibleTimeout.value)
    hiddenTimeout.value = setTimeout(() => {
        if (!tooltiptext.value) return
        tooltiptext.value.style.visibility = 'hidden'
    }, 250)
}
</script>
<template>
    <span class="material-symbols-outlined tooltip" :onmouseenter="mouseEnter" :onmouseleave="mouseLeave">
        {{ iconName }}
        <span class="tooltiptext hidden" ref="tooltiptext">Icône {{ iconName }}</span>
    </span>
</template>

<style scoped>
.material-symbols-outlined {
  vertical-align: middle;
}

.tooltip {
  position: relative;
  display: inline-block;
}

/* .tooltiptext {
  visibility: hidden; 
  font-size: 12px;
  width: 80px;
  background-color: var(--color-background-transparent);
  color: var(--color-text);
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 1;
} */
</style>