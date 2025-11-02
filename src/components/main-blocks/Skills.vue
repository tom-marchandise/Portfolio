<script setup lang="ts">
import BoxFrame from '../nuclear-components/BoxFrame.vue';
import SectionTitle from '../nuclear-components/SectionTitle.vue';
import type { SkillModalContent } from '@/types';
import Icon from '../nuclear-components/Icon.vue';
import { type SkillBlock, skills } from '@/data/skills';
import { computed } from 'vue';

const emit = defineEmits<{
    toggleModal: [value: SkillModalContent]
}>()

const skillBlocks = computed(() => skills)

const toggleModal = (skillBlock: SkillBlock) => {
    const { title, description, skills } = skillBlock
    const modalContent: SkillModalContent = {
        type: 'skill',
        title,
        description,
        skills
    }

    emit('toggleModal', modalContent)
}  
</script>

<!-- <template>
    <div class="lg:flex lg:flex-col lg:items-center">
        <SectionTitle title="Mes compétences" description="Ce que j'ai acquis au fil du temps" />
        <div class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 xl:gap-8 justify-center p-4 gap-4 mt-4 xl:w-11/12">
            <BoxFrame 
                v-for="skill in skillBlocks"
                :key="skill.title" 
                :border-size="2" 
                :shadow-size="6"
                radius="xl"
                class="p-3 relative flex items-center lg:flex-col h-24 lg:h-full cursor-pointer"
                :class="skill.class"
                @click="toggleModal(skill)"
            >
                <div class="w-full text-center">
                    <h3 class="text-lg sm:text-xl tracking-wide">{{ skill.title }}</h3>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:flex-wrap lg:items-start lg:justify-center lg:pt-4 lg:gap-x-2 lg:gap-y-3">
                    <span v-for="pill in skill.skillPills" class="bg-secondary/50 text-black px-1.5 py-1 border rounded-xl">
                        {{ pill }}
                    </span>
                </div>
                <div class="absolute bottom-1.5 right-3 text-lg sm:text-xl font-bold text-accent/50 leading-none">
                    +
                </div>
            </BoxFrame>
        </div>
    </div>
</template> -->

<template>
    <div>
        <SectionTitle title="Mes compétences" description="Ce que j'ai acquis au fil du temps" />
        
        <div class="grid grid-cols-2 lg:grid-cols-3 justify-center p-4 gap-4 mt-4">
            
            <BoxFrame 
                v-for="skill in skillBlocks"
                :key="skill.title" 
                :border-size="2" 
                :shadow-size="6"
                radius="xl"
                class="p-3 relative flex items-center h-24 lg:h-40 cursor-pointer transition-all duration-250 
                    hover:!shadow-[9px_9px_0_0_var(--color-shadow)] hover:-translate-x-1 hover:-translate-y-1
                    active:shadow-[3px_3px_0_0_var(--color-shadow)] active:translate-x-0 active:translate-y-0 active:duration-0 group"
                @click="toggleModal(skill)"
            >
                <div class="w-full text-center">
                    <h3 class="text-lg sm:text-2xl xl:text-3xl tracking-wide">
                        <span class="group-highlight">
                            {{ skill.title }}
                        </span>
                    </h3>
                </div>
                
                <div class="absolute bottom-1.5 right-3 text-lg sm:text-xl lg:hidden font-bold text-accent/50 leading-none">
                    +
                </div>
            </BoxFrame>

        </div>
    </div>
</template>