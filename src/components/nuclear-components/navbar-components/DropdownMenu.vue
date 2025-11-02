<script setup lang="ts">
import LinkedInSVG from '@/assets/SVGs/LinkedInSVG.vue';
import BoxFrame from '../BoxFrame.vue';
import GitHubSVG from '@/assets/SVGs/GitHubSVG.vue';
import ThemeToggleButton from './ThemeToggleButton.vue';
import NavigationList from './NavigationList.vue';

const emit = defineEmits(['closeMenu'])
</script>

<template>
    <BoxFrame :shadow-size="4" :border-size="2" radius="xl" class="!w-9/12 md:!w-7/12">
            <NavigationList @click.stop="emit('closeMenu')"/>
            <div class="flex justify-between items-center mt-3">
                <ul class="flex gap-2">
                    <li class="cursor-pointer w-fit">
                        <a @click.stop="emit('closeMenu')" href="https://www.linkedin.com/in/tom-marchandise-8b4876186/" target="_blank">
                            <LinkedInSVG :width="30" :height="30" />
                        </a>
                    </li>
                    <li class="cursor-pointer w-fit">
                        <a @click.stop="emit('closeMenu')" href="https://github.com/tom-marchandise" target="_blank">
                            <GitHubSVG :width="30" :height="30" />
                        </a>
                    </li>
                </ul>
                <ThemeToggleButton />
            </div>
    </BoxFrame>

</template>
