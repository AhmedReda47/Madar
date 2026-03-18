<template>
  <main ref="sectionsRoot" class="pt-20 sm:pt-24 lg:pt-20">
    <AboutUsSection />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AboutUsSection from '~/components/about-us/AboutUsSection.vue'
import { useSectionScrollAnimations } from '~/composables/useSectionScrollAnimations'

const sectionsRoot = ref<HTMLElement | null>(null)

useSectionScrollAnimations(sectionsRoot)

useSeoMeta({
  title: 'About Us',
  description:
    'Learn about Madar vision, story, and product strategy that drive exceptional digital experiences.',
})
</script>
