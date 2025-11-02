<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Icon from './Icon.vue';
import BoxFrame from './BoxFrame.vue';

const props = defineProps<{
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
}>()

const DURATION = 5000

const isVisible = defineModel<boolean>('isVisible')
let timerId = ref<number | undefined>()

watch(isVisible, (newValue) => {
  if (newValue) {
    clearTimeout(timerId.value)
    timerId.value = setTimeout(() => {
      isVisible.value = false
    }, DURATION)
  } else {
    clearTimeout(timerId.value)
  }
})

const toastConfig = computed(() => {
  switch (props.type) {
    case 'success':
      return { icon: 'check_circle', colorVar: 'var(--color-success)' }
    case 'error':
      return { icon: 'error', colorVar: 'var(--color-accent)' }
    case 'warning':
      return { icon: 'warning', colorVar: 'var(--color-primary)' }
    case 'info':
    default:
      return { icon: 'info', colorVar: 'var(--color-secondary)' }
  }
})

const toastBoxStyle = computed(() => ({
  '--color-border': toastConfig.value.colorVar,
  '--color-shadow': toastConfig.value.colorVar,
}))

const timerBarStyle = computed(() => ({
  'background-color': toastConfig.value.colorVar,
  'animation-duration': `${DURATION}ms`,
}))
</script>
<template>
    <div class="fixed bottom-6 right-6 z-101">
    
    <transition name="toast-slide">
      <div v-if="isVisible">
        
        <BoxFrame
          :border-size="2"
          :shadow-size="6"
          radius="lg"
          class="p-4 w-80 bg-background relative overflow-hidden"
          :style="toastBoxStyle"
        >
          <div class="flex gap-3 items-center">
            <div>
              <Icon :icon-name="toastConfig.icon" class="!text-3xl" :style="{ color: toastConfig.colorVar }" />
            </div>
            <div class="flex-1 text-sm text-text pr-4">
              {{ message }}
            </div>
            <div class="absolute top-2 right-2">
              <button @click="isVisible = false">
                <Icon icon-name="close" class="!text-lg text-text-secondary cursor-pointer" />
              </button>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 h-1 w-full">
            <div 
              class="h-full toast-timer-bar" 
              :style="timerBarStyle"
            >
            </div>
          </div>
        </BoxFrame>
      </div>
    </transition>
  </div>
</template>


<style scoped>
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

.toast-timer-bar {
  transform-origin: left;

  animation: shrink-x linear forwards;
}
</style>