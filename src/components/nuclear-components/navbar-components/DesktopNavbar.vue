<script setup lang="ts">
import NavigationList from './NavigationList.vue';
import ThemeToggleButton from './ThemeToggleButton.vue';


</script>

<template>
    <nav class="flex justify-between items-center px-3 py-2 2xl:px-5 2xl:py-4">
        <div>
            <h1 class="tracking-wider text-xl 2xl:text-2xl uppercase">
                <a href="#FirstView">
                    Tom Marchandise
                </a>
            </h1>
        </div>
        <div class="flex gap-3 lg:gap-6">
            <NavigationList />
            <ThemeToggleButton />
        </div>
    </nav>  
</template>
