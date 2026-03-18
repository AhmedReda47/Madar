<template>
  <main ref="sectionsRoot" class="pt-20 sm:pt-24 lg:pt-20">
    <ServicesSection />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ServicesSection from '~/components/services/ServicesSection.vue'
import { useSectionScrollAnimations } from '~/composables/useSectionScrollAnimations'

const sectionsRoot = ref<HTMLElement | null>(null)

useSectionScrollAnimations(sectionsRoot)

useSeoMeta({
  title: 'Services',
  description:
    'Explore Madar digital services including mobile development, web development, and UI/UX design.',
})
</script>
