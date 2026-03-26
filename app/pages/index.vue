<template>
  <div ref="sectionsRoot">
    <HomeSection />
    <TeamSection />
    <PartnersSection />
    <AboutUsSection />
    <ServicesSection />
    <ClientsSection />
    <ToolsSection />
    <WorldwideSection />
    <PortfolioSection />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead, useRequestURL, useRoute, useSeoMeta } from '#app'
import AboutUsSection from '~/components/about-us/AboutUsSection.vue'
import HomeSection from '~/components/home/HomeSection.vue'
import PartnersSection from '~/components/partners/PartnersSection.vue'
import TeamSection from '~/components/team/TeamSection.vue'
import ServicesSection from '~/components/services/ServicesSection.vue' 
import ClientsSection from '~/components/clients/ClientsSection.vue'
import ToolsSection from '~/components/tools/ToolsSection.vue'
import WorldwideSection from '~/components/world-wide/WorldwideSection.vue'
import PortfolioSection from '~/components/portfolio/PortfolioSection.vue'
import { useSectionScrollAnimations } from '~/composables/useSectionScrollAnimations'

const route = useRoute()
const requestURL = useRequestURL()
const madarLogoPath = '/images/MadarLogo.png'
const sectionsRoot = ref<HTMLElement | null>(null)

const homeTitle = 'Software Development and Digital Growth Services'
const homeSlogan = 'Build Your digital product'
const homeDescription =
  `${homeSlogan}. Madar helps businesses scale through web and mobile development, UI/UX design, and data-driven digital strategies tailored for measurable growth.`
const canonicalUrl = computed(() => new URL(route.path || '/', requestURL.origin).toString())
const ogImageUrl = computed(() => new URL(madarLogoPath, requestURL.origin).toString())

useSeoMeta({
  title: homeTitle,
  description: homeDescription,
  ogTitle: `${homeTitle} | Madar`,
  ogDescription: homeDescription,
  ogImage: ogImageUrl,
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: `${homeTitle} | Madar`,
  twitterDescription: homeDescription,
  twitterImage: ogImageUrl,
})

useHead(() => ({
  link: [{ key: 'canonical', rel: 'canonical', href: canonicalUrl.value }],
}))
useSectionScrollAnimations(sectionsRoot)
</script>
<style scoped>
</style>