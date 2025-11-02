<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import AnimatedBurger from './AnimatedBurger.vue';
import DropdownMenu from './DropdownMenu.vue';
import { onClickOutside } from '@vueuse/core';

const isMenuOpen = ref(false); 
const navbarRef = useTemplateRef('navbar')

onClickOutside(navbarRef, () => {
    isMenuOpen.value = false
})
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}       
</script>
<template>
    <nav ref="navbar">

        <transition name="fade">
            <div 
                v-if="isMenuOpen"
                @click="isMenuOpen = false"
                class="fixed inset-0 bg-black/50"
            >
            </div>
        </transition>

        <div class="flex justify-between items-center px-3 py-2">
            <div class="flex">
                <h1 class="text-sm tracking-wider uppercase sm:text-base">
                    <a href="#FirstView">Tom Marchandise</a>
                </h1>
            </div>
            <div class="flex" @click="toggleMenu">
                <AnimatedBurger :is-open="isMenuOpen"/>
            </div>
        </div>
        <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <DropdownMenu v-if="isMenuOpen" @close-menu="toggleMenu" class="absolute w-10/12 left-1/2 -translate-x-1/2 p-3 mt-3" />
        </transition>
    </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>