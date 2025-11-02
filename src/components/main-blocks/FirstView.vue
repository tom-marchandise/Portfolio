<script setup lang="ts">
import ButtonPrimary from '../nuclear-components/ButtonPrimary.vue';

</script>
<template>
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-16 xl:gap-32 2xl:gap-72">
        <div class="bg-background border-border border-y-2 border-r-2 p-3 w-70 sm:w-full md:w-11/12 lg:w-10/12 2xl:w-8/12 h-fit shadow-[6px_6px_0_0_var(--color-shadow),0_6px_0_0_var(--color-shadow)] rounded-br-2xl rounded-tr-2xl">
            <p class="sm:text-lg lg:text-xl xl:text-2xl">Salut, je suis <strong>Tom</strong>.</p>
            <h2 class="uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl my-1 2xl:my-3 dark:text-accent">développeur full stack.</h2>
            <p class="sm:text-lg lg:text-xl xl:text-2xl">Je conçois des sites en plaçant <strong>l'utilisateur</strong> au cœur de ma démarche.</p>
            <ButtonPrimary tag="a" href="#AboutMe" text="Me découvrir" class="mt-3 mb-1.5"/>
        </div>
        <div class="self-end bg-background border-border border-y-2 border-l-2 p-3 w-70 sm:w-full md:w-11/12 lg:w-10/12 xl:w-7/12 h-fit shadow-[-6px_6px_0_0_var(--color-shadow),0_6px_0_0_var(--color-shadow)] rounded-bl-2xl rounded-tl-2xl">
            <img class="border-2" src="/images/ChillGuy.jpg"/>
        </div>
    </div>
</template>
