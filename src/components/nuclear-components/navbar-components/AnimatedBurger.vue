<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <button class="relative h-6 w-6">
    <div class="relative flex h-full w-full flex-col justify-center space-y-1.5">
      <span
        class="block h-0.5 w-full bg-text transition-all duration-300 ease-in-out"
        :class="{ 'rotate-45 translate-y-[8px]': isOpen }"
      >
      </span>
      <span
        class="block h-0.5 w-full bg-text transition-all duration-300 ease-in-out"
        :class="{ 'opacity-0': isOpen }"
      >
      </span>
      <span
        class="block h-0.5 w-full bg-text transition-all duration-300 ease-in-out"
        :class="{ '-rotate-45 -translate-y-[8px]': isOpen }"
      >
      </span>
    </div>
  </button>
</template>