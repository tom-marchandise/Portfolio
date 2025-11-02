<script setup lang="ts">
import BoxFrame from '../nuclear-components/BoxFrame.vue';
import SectionTitle from '../nuclear-components/SectionTitle.vue';


    
</script>
<template>
    <div>
        <SectionTitle title="à propos de moi" description="Une petite introduction" />
        <div class="flex justify-center text-justify xl:text-left xl:tracking-wide mt-8">
            <BoxFrame :border-size="2" :shadow-size="6" radius="2xl" class="p-3 w-10/12 lg:w-8/12 sm:text-lg lg:text-xl xl:text-2xl lg:leading-relaxed">
                <p>Je m'appelle <span class="bg-accent-transparent p-0.5">Tom Marchandise</span>,</p>
                <p>développeur web full stack <span class="bg-accent-transparent p-0.5">passionné</span> basé à Lyon.</p>
                <p>Je suis en quête d'expériences <span class="bg-accent-transparent p-0.5">captivantes et challengeantes</span> pour assouvir ma soif d'apprendre et de m'améliorer.</p>
                <p>Pourquoi pas avec <span class="bg-accent-transparent p-0.5">vous</span> ?</p>
            </BoxFrame>
        </div>
    </div>
</template>
