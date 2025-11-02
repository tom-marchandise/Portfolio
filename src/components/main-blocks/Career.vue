<script setup lang="ts">
import { ref } from 'vue'
import BoxFrame from '../nuclear-components/BoxFrame.vue'
import Icon from '../nuclear-components/Icon.vue'
import SectionTitle from '../nuclear-components/SectionTitle.vue'
import type { CareerBlock } from '@/types'
import ButtonSecondary from '../nuclear-components/ButtonSecondary.vue'

const openedBlockTitle = ref<string | null>(null)

const toggleBlock = (title: string) => {
    if (openedBlockTitle.value === title) {
        openedBlockTitle.value = null
    } else {
        openedBlockTitle.value = title
    }
}

const careerBlocks: CareerBlock[] = [
    {
        title: 'Matawan',
        position: 'alternant front-end',
        date: "2024 - aujourd'hui",
        description: "Première expérience professionnelle de 14 mois où j'ai pu appliquer et approfondir mes acquis scolaires. Ma mission principale a été de participer à la modernisation front-end d'un monolithe CakePHP.",
        mainSkills: [
            "Vue.js",
            "TypeScript",
            "Docker",
            "Git",
            "APIs REST",
            "SCRUM"
        ]
    },
    {
        title: "web@cadémie",
        position: "étudiant web",
        date: "2023 - 2025",
        description: "Formation professionnelle en développement web concentrée en 2 ans. Éducation basée sur des projets, permettant d'apprendre en pratiquant.",
        mainSkills: [
            "PHP/Symfony",
            "Javascript/React",
            "React Native",
            "Docker",
            "Git",
            "MySQL",
            "Stack MERN",
            "Gestion de projet"
        ]
    }
]
</script>

<template>
    <div class="flex flex-col items-center">
        <SectionTitle title="Mon parcours" description="De la formation au monde professionnel" />
        <div class="flex flex-col mt-8 lg:gap-5 lg:items-center lg:w-8/12">
            <div v-for="block in careerBlocks" :key="block.title" @click="toggleBlock(block.title)" class="px-3 flex flex-col gap-3 cursor-pointer bg-background border-border first:border-t-2 border-b-4 last:border-b-2 w-full lg:border-2 lg:shadow-[6px_6px_var(--color-shadow)]">
                <h3 class="text-center uppercase text-xl sm:text-2xl xl:text-3xl sm:tracking-wide mt-3">
                    {{ block.title }}
                </h3>
                <div class="flex flex-col gap-2">
                    <div class="flex justify-around uppercase text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
                        <p>{{ block.position }}</p>
                        <p>{{ block.date }}</p>
                    </div>
                    <div class="flex justify-center">
                        <Icon icon-name="keyboard_arrow_down" class="lg:!text-3xl xl:!text-4xl transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': openedBlockTitle === block.title }"/>
                    </div>
                </div>
                <div 
                    class="transition-all duration-300 ease-in-out overflow-hidden max-h-0 text-sm sm:text-base"
                    :class="{ 
                        'max-h-96 mb-2 pt-4 border-t-2 border-border': openedBlockTitle === block.title 
                    }"
                >
                    <p>{{ block.description }}</p>
                    <div class="flex flex-col text-center justify-center gap-3 mt-2 mb-2">
                        <p class="font-bold">Compétences principales :</p>
                        <div class="flex flex-wrap justify-center gap-x-2 gap-y-3 px-1">
                            <div v-for="skill in block.mainSkills" :key="skill">
                                <span class="bg-secondary/50 text-black px-1.5 py-1 border rounded-xl">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end mt-3 mr-3 gap-1 w-full lg:w-8/12">
            <ButtonSecondary tag="a" text="Mon CV" append-icon="open_in_new" href="/TOM-MARCHANDISE-CV.pdf" target="_blank"/>
        </div>
    </div>
</template>
