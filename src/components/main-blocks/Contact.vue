<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '../nuclear-components/SectionTitle.vue'
import BoxFrame from '../nuclear-components/BoxFrame.vue'
import ButtonPrimary from '../nuclear-components/ButtonPrimary.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log('Formulaire soumis avec :', { 
    name: name.value, 
    email: email.value, 
    message: message.value 
  })
  // Peut-être mettre un toast ?
}

const inputClass = "w-full appearance-none bg-background px-3 py-2 border-2 border-border rounded-lg shadow-[3px_3px_0_0_var(--color-shadow)] transition-all duration-250 focus:outline-none focus:shadow-[6px_6px_0_0_var(--color-shadow)] focus:translate-[-3px]"
const labelClass = "block text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-2"
</script>

<template>
  <div class="flex flex-col items-center">
    <SectionTitle title="Me contacter" description="Un projet ? Une question ? Dites-moi tout." />

    <BoxFrame
      :border-size="2"
      :shadow-size="6"
      radius="xl"
      class="p-4 md:p-8 mt-4 max-w-lg xl:max-w-xl 2xl:max-w-2xl w-11/12 mx-4"
    >
      <form 
        name="contact" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
      
        <div class="flex flex-col gap-6">
          <div>
            <label for="name" :class="labelClass">Nom</label>
            <input 
              v-model="name"
              type="text" 
              name="name" 
              id="name"
              :class="inputClass"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label for="email" :class="labelClass">Email</label>
            <input 
              v-model="email"
              type="email" 
              name="email" 
              id="email"
              :class="inputClass"
              placeholder="john.doe@gmail.com"
              required
            />
          </div>

          <div>
            <label for="message" :class="labelClass">Message</label>
            <textarea 
              v-model="message"
              name="message" 
              id="message"
              rows="5"
              :class="inputClass"
              placeholder="Votre projet, question, idée..."
              required
            ></textarea>
          </div>

          <div class="flex justify-end">
            <ButtonPrimary 
              tag="button"
              type="submit"
              text="Envoyer le message"
              append-icon="send"
            />
          </div>
        </div>
      </form>
    </BoxFrame>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>