<template>
  <main ref="sectionsRoot" class="pt-20 sm:pt-24 lg:pt-20">
    <PortfolioSection />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PortfolioSection from '~/components/portfolio/PortfolioSection.vue'
import { useSectionScrollAnimations } from '~/composables/useSectionScrollAnimations'

const sectionsRoot = ref<HTMLElement | null>(null)

useSectionScrollAnimations(sectionsRoot)

useSeoMeta({
  title: 'Portfolio',
  description:
    'View Madar portfolio projects and case studies across web, mobile, and dashboard products.',
})
</script>
