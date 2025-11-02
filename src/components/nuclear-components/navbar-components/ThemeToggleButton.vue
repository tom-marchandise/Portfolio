<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Icon from '../Icon.vue'; 

const isDark = useDark();

const toggleDark = useToggle(isDark);
</script>

<template>
  <button 
    @click="toggleDark()"
    class="relative flex cursor-pointer h-fit w-fit items-center justify-center overflow-hidden rounded-full"
    aria-label="Changer le thème"
  >
    <transition name="theme-toggle">
      <Icon 
        v-if="!isDark" 
        key="sun" 
        icon-name="light_mode" 
        class="absolute !text-3xl 2xl:!text-4xl" 
      />
    </transition>
    
    <transition name="theme-toggle">
      <Icon 
        v-if="isDark" 
        key="moon" 
        icon-name="dark_mode" 
        class="absolute !text-3xl 2xl:!text-4xl" 
      />
    </transition>

  </button>
</template>

<style>
.theme-toggle-enter-active,
.theme-toggle-leave-active {
  transition: all 0.3s ease-in-out;
}

.theme-toggle-enter-from {
  opacity: 0;
  transform: scale(0.5) rotate(-90deg);
}

.theme-toggle-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(90deg);
}
</style>