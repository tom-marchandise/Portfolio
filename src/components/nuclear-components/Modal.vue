<script setup lang="ts">
import type { ModalContent } from '@/types';
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef } from 'vue';
import BoxFrame from './BoxFrame.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import ButtonSecondary from './ButtonSecondary.vue';

const props = defineProps<{
    modalContent: ModalContent | null
}>()

const isOpened = defineModel<boolean>()

const modalBoxRef = useTemplateRef('modalBoxRef');

const close = () => {
  isOpened.value = false;
}

onClickOutside(modalBoxRef, close);
</script>

<template>
    <div>
        <transition name="fade">
            <div v-if="isOpened" class="fixed z-101 inset-0 bg-black/50"></div>
        </transition>

        <transition name="modal-pop">
            <div 
                v-if="isOpened && modalContent" 
                class="fixed inset-0 flex items-center justify-center z-102 p-4"
            >
                <BoxFrame 
                    ref="modalBoxRef" 
                    :border-size="2" 
                    :shadow-size="6" 
                    radius="xl" 
                    class="p-2 m-4 w-full max-w-md xl:max-w-xl 2xl:max-w-2xl max-h-[85vh] flex flex-col"
                >
                    <div class="overflow-y-auto p-2 scrollbar-hide">
                        
                        <div v-if="modalContent.type === 'project'">
                            <img 
                                :src="modalContent.image" 
                                :alt="modalContent.title"
                                class="w-full h-48 lg:h-52 xl:h-64 2xl:h-80 object-cover rounded-lg border-2 border-text mb-4"
                            >
                            
                            <h3 class="text-xl lg:text-2xl text-center font-bold mb-2">
                                {{ modalContent.title }}
                            </h3>
                            
                            <p v-html="modalContent.description" class="my-2 text-sm lg:text-base text-text-secondary"></p>

                            <hr class="border-border my-4">

                            <div class="mb-4">
                                <h4 class="font-bold uppercase text-sm lg:text-base text-text-secondary tracking-wider mb-2">
                                    Stack
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    <span 
                                        v-for="tech in modalContent.stack" 
                                        :key="tech"
                                        class="px-2 py-1 bg-secondary/50 text-text text-sm lg:text-base rounded-md border border-border"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <div v-if="modalContent.links" class="mb-4">
                                <h4 class="font-bold uppercase text-sm lg:text-base text-text-secondary tracking-wider mb-2">
                                    Liens
                                </h4>
                                <div class="flex gap-3">
                                    <ButtonSecondary
                                        tag="a"
                                        :href="modalContent.links.github"
                                        target="_blank"
                                        text="GitHub"
                                        append-icon="code"
                                    />
                                    <ButtonPrimary 
                                        v-if="modalContent.links.live"
                                        tag="a"
                                        :href="modalContent.links.live"
                                        target="_blank"
                                        text="Voir le site"
                                        append-icon="open_in_new"
                                    />
                                </div>
                            </div>
                            <div v-else class="mb-4">
                                <h4 class="font-bold uppercase text-sm lg:text-base text-text-secondary tracking-wider mb-2">Étant confidentiel, pas de lien disponible.</h4>
                            </div>

                            <div>
                                <h4 class="font-bold uppercase text-sm lg:text-base text-text-secondary tracking-wider mb-2">
                                    Compétences RNCP
                                </h4>
                                <ul class="list-disc list-outside pl-5 text-sm lg:text-base text-text-secondary space-y-1">
                                    <li v-for="rncp in modalContent.rncpSkills" :key="rncp">
                                        {{ rncp }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div v-else-if="modalContent.type === 'skill'">
                            <h3 class="text-xl sm:text-2xl text-center font-bold mb-4">
                                {{ modalContent.title }}
                            </h3>
                            
                            <p v-if="modalContent.description" v-html="modalContent.description" class="my-2 text-sm sm:text-base text-center text-text-secondary"></p>
                            
                            <hr class="border-border my-4">

                            <ul class="flex flex-col justify-center gap-4">
                                <li 
                                    v-for="skill in modalContent.skills" 
                                    :key="skill.skillName"
                                    class="pb-4 last:border-b-0 border-b border-border"
                                >
                                    <h4 class="text-lg sm:text-xl uppercase text-accent tracking-wider font-semibold mb-1">
                                        {{ skill.skillName }}
                                    </h4>
                                    <p class="text-sm sm:text-base text-text-secondary" v-html="skill.skillDescription"></p>
                                    <p v-if="skill.extra" class="text-sm sm:text-base text-text-secondary mt-1" v-html="skill.extra"></p>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </BoxFrame>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-pop-enter-active,
.modal-pop-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.modal-pop-enter-from,
.modal-pop-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.modal-pop-enter-to,
.modal-pop-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>