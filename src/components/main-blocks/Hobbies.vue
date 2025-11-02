<script setup lang="ts">
import SectionTitle from '../nuclear-components/SectionTitle.vue'
import BoxFrame from '../nuclear-components/BoxFrame.vue'
import Icon from '../nuclear-components/Icon.vue'
import { ref } from 'vue'

interface Passion {
  title: string
  icon: string 
  image: string
  description: string
}

const passions = ref<Passion[]>([
  {
    title: 'Les jeux vidéo',
    icon: 'stadia_controller', 
    image: 'src/assets/passions/Cinema.webp',
    description: "Passionné de jeux vidéo (surtout les indépendants), j'aime analyser leur <strong>game design</strong>. Cet intérêt m'a naturellement poussé à explorer la création, et j'ai d'ailleurs <strong>développé</strong> un projet de jeu vidéo (un <i>vampire survivor-like</i>) avec Phaser durant ma formation."
  },
  {
    title: 'Le cinéma',
    icon: 'theaters',
    image: 'src/assets/passions/Escalade.jpg',
    description: "Je passe beaucoup de mon temps libre autant dans les salles sombres que devant un film chez moi. J'ai eu quelques cours de cinéma par le passé et je nourris régulièrement mon <a href='https://letterboxd.com/Dusky69/' target='_blank' class='cursor-pointer link-underline font-semibold'>Letterboxd</a>."
  },
  {
    title: "L'escalade",
    icon: 'landscape',
    image: 'src/assets/passions/Escalade.jpg',
    description: "Je pratique l'escalade depuis peu, et <strong>c'est un vrai coup de cœur</strong>. Après avoir essayé plusieurs sports, je pense avoir enfin trouvé celui qui me convient."
  }
])
</script>

<template>
    <div class="sm:flex sm:flex-col sm:items-center">
        <SectionTitle title="Mes passions" description="Ce qui m'anime en dehors du code" />

        <div class="flex flex-col gap-6 p-4 mt-4 sm:w-11/12 2xl:w-9/12">

            <BoxFrame
                v-for="passion in passions"
                :key="passion.title"
                :border-size="2"
                :shadow-size="6"
                radius="xs"
                class="p-4 flex items-center gap-4" 
            >
                <div>
                    <Icon :icon-name="passion.icon" class="!text-3xl sm:!text-4xl lg:!text-5xl xl:!text-6xl text-accent" />
                </div>
        
                <div class="flex-1">
                    <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider">{{ passion.title }}</h3>
                    <p v-html="passion.description" class="text-sm sm:text-base lg:text-lg xl:text-xl text-text-secondary mt-1"></p>
                </div>
        </BoxFrame>
        </div>
    </div>
</template>