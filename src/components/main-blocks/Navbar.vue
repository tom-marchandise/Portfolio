<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { computed, watch } from 'vue';
import MobileNavbar from '../nuclear-components/navbar-components/MobileNavbar.vue';
import DesktopNavbar from '../nuclear-components/navbar-components/DesktopNavbar.vue';

const activeBreakpoint = useBreakpoints(breakpointsTailwind).active()
const isMobile = computed(() => 
    activeBreakpoint.value === 'md' || activeBreakpoint.value === 'sm' || activeBreakpoint.value === ''
)
</script>
<template>
    <header>
        <MobileNavbar v-if="isMobile" />
        <DesktopNavbar v-else />
    </header>
</template>
