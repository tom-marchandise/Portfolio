<script setup lang="ts">
import gsap from '@/plugins/gsap'
import { onMounted, ref, useTemplateRef } from 'vue'
import Navbar from './components/main-blocks/Navbar.vue'
import Career from './components/main-blocks/Career.vue'
import Skills from './components/main-blocks/Skills.vue'
import Modal from './components/nuclear-components/Modal.vue'
import type { ModalContent } from './types'
import Projects from './components/main-blocks/Projects.vue'
import Hobbies from './components/main-blocks/Hobbies.vue'
import Contact from './components/main-blocks/Contact.vue'
import Icon from './components/nuclear-components/Icon.vue'
import FirstView from './components/main-blocks/FirstView.vue'
import AboutMe from './components/main-blocks/AboutMe.vue'
import GitHubSVG from './assets/SVGs/GitHubSVG.vue'
import LinkedInSVG from './assets/SVGs/LinkedInSVG.vue'

/* const box = useTemplateRef('box')

onMounted(() => {
  // gsap.set(box.value, {
  //   opacity: 0,
  // })
  gsap.to(box.value, {
    x: 500,
    background: "#f7dd1d",
    duration: 1,
    repeat: 1,
    yoyo: true,
    scrollTrigger: {
      trigger: box.value,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })
}) */
const switchTheme = () => {
  const rootElementClass = document.documentElement.classList
  if (!rootElementClass.contains("dark")) {
    rootElementClass.add("dark")
  } else {
    rootElementClass.remove("dark")
  }
}

const modalContent = ref<ModalContent | null>(null)
const modalIsOpened = ref(false)

const openModal = (content: ModalContent) => {
  modalContent.value = content
  modalIsOpened.value = true
  console.log('opening modal');
  
}

const mainBlockClass = "mb-25 scroll-mt-16 xl:scroll-mt-24 2xl:scroll-mt-28" 
</script>

<template>
  <div>
    <Navbar class="fixed bg-cream z-100 left-0 top-0 w-full border-b-2 border-b-border" />
    <FirstView class="mt-28 2xl:mt-32 mb-25 scroll-mt-16 xl:scroll-mt-24 2xl:scroll-mt-28" id="FirstView" />
    <AboutMe :class="mainBlockClass" id="AboutMe" />
    <Career :class="mainBlockClass" id="Career" />
    <Projects :class="mainBlockClass" id="Projects" @toggle-modal="openModal"/>
    <Skills :class="mainBlockClass" id="Skills" @toggle-modal="openModal" />
    <Hobbies :class="mainBlockClass" id="Passions" />
    <Contact :class="mainBlockClass" id="Contact" />
    <footer class="bg-footer h-40 2xl:h-52 flex items-center justify-center gap-10">
      <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-white sm:text-lg lg:text-xl">
          Créé de A à Z par Tom Marchandise
          <Icon icon-name="heart_smile" />
        </p>
        <p class="text-white sm:text-lg lg:text-xl">
          Fait en Vue.js et déployé avec 
          <a href="https://www.netlify.com/" target="_blank" class="font-semibold link-underline">
            Netlify
          </a>
        </p>
        <p class="text-white text-xs">Je recommande vivement le light mode</p>
      </div>
      <div class="hidden lg:flex lg:gap-3">
        <GitHubSVG :width="30" :height="30" fill="white"/>
        <LinkedInSVG :width="30" :height="30" fill="white"/>
      </div>
    </footer>
    <Modal v-model="modalIsOpened" :modal-content />
  </div>
</template>

