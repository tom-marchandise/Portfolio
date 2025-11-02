<script setup lang="ts">
import { projects, type Project } from '@/data/projects';
import { computed, useTemplateRef } from 'vue';
import SectionTitle from '../nuclear-components/SectionTitle.vue';
import BoxFrame from '../nuclear-components/BoxFrame.vue';
import ButtonPrimary from '../nuclear-components/ButtonPrimary.vue';
import type { ProjectModalContent } from '@/types';
import Icon from '../nuclear-components/Icon.vue';
import ButtonSecondary from '../nuclear-components/ButtonSecondary.vue';

const emit = defineEmits<{
    toggleModal: [value: ProjectModalContent]
}>()

const projectsList = computed(() => projects)

const toggleModal = (projectBlock: Project) => {
    const { title, longDescription, image, stack, links, rncpSkills } = projectBlock
    const modalContent: ProjectModalContent = {
        type: 'project',
        title,
        description: longDescription,
        image,
        stack,
        links,
        rncpSkills
    }

    emit('toggleModal', modalContent)
}

const carouselContainer = useTemplateRef('carouselContainer');

const scrollNext = () => {
  if (carouselContainer.value) {
    const scrollAmount = carouselContainer.value.clientWidth;
    carouselContainer.value.scrollBy({ 
      left: scrollAmount, 
      behavior: 'smooth' 
    });
  }
}

const scrollPrev = () => {
  if (carouselContainer.value) {
    const scrollAmount = carouselContainer.value.clientWidth;
    carouselContainer.value.scrollBy({ 
      left: -scrollAmount, 
      behavior: 'smooth' 
    });
  }
}
</script>

<template>
    <div>
        <SectionTitle title="Mes projets" description="Les plus importants" />
        <div class="relative">
            <div 
                ref="carouselContainer" 
                class="flex relative gap-4 overflow-x-auto snap-x snap-mandatory 
                  p-4 mt-4 mx-2 scrollbar-hide"
            >
                <BoxFrame
                    v-for="project in projectsList"
                    :key="project.id"
                    :border-size="2" 
                    :shadow-size="6" 
                    radius="xl"
                    class="w-80 lg:w-96 xl:w-[27rem] h-96 lg:h-[27rem] xl:h-[30rem] snap-start flex flex-col shrink-0 p-4"
                >
                    <div class="w-full h-40 lg:h-52 xl:h-60 border-2 overflow-hidden">
                        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col items-center flex-1 mt-3">
                        <h3 class="text-lg sm:text-xl xl:text-2xl tracking-wide text-start w-full h-14">{{ project.title }}</h3>
                        <p class="text-sm mt-2 sm:text-base xl:text-lg line-clamp-3">{{ project.shortDescription }}</p>
                        <ButtonPrimary 
                            @click="toggleModal(project)" 
                            text="En savoir plus" 
                            tag="button" 
                            class="mt-auto pt-2 w-1/2 lg:w-1/2"
                        />
                    </div>
                </BoxFrame>
            </div>

            <button 
              @click="scrollPrev"
                class="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 p-2 ml-4
                   bg-background border-2 border-border rounded-lg
                   shadow-[3px_3px_0_0_var(--color-shadow)] 
                   hover:shadow-[6px_6px_0_0_var(--color-shadow)] hover:translate-x-[-3px] hover:-translate-y-1/2
                   active:shadow-none active:translate-x-[0px] active:-translate-y-1/2
                   transition-all duration-250 
                   hidden lg:block"
            >
                <Icon icon-name="arrow_back_ios" class="!text-xl" />
            </button>
            
            <button 
                @click="scrollNext"
                class="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 p-2 mr-4
                     bg-background border-2 border-border rounded-lg
                    shadow-[-3px_3px_0_0_var(--color-shadow)] 
                    hover:shadow-[-6px_6px_0_0_var(--color-shadow)] hover:translate-x-[3px] hover:-translate-y-1/2
                    active:shadow-none active:translate-x-[0px] active:-translate-y-1/2
                    transition-all duration-250
                    hidden lg:block"
            >
                <Icon icon-name="arrow_forward_ios" class="!text-xl" />
            </button>

        </div>

        <div class="flex justify-end mt-3 mr-3 gap-1">
          <ButtonSecondary tag="a" text="Mon GitHub" append-icon="open_in_new" href="https://github.com/tom-marchandise" target="_blank" />
        </div>
    </div>
</template>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>