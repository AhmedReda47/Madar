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
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
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

const route = useRoute()
const requestURL = useRequestURL()
const madarLogoPath = '/images/MadarLogo.png'
const sectionsRoot = ref<HTMLElement | null>(null)
const cleanupFns: Array<() => void> = []

const homeTitle = 'Software Development and Digital Growth Services'
const homeDescription =
  'Madar helps businesses scale through web and mobile development, UI/UX design, and data-driven digital strategies tailored for measurable growth.'
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

onMounted(async () => {
  if (!sectionsRoot.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  await nextTick()

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])

  gsap.registerPlugin(ScrollTrigger)

  const sections = sectionsRoot.value.querySelectorAll('section')

  sections.forEach((section) => {
    const sectionElements = Array.from(
      section.querySelectorAll<HTMLElement>('h1, h2, h3, p, li, .project-card, .project-content, .project-image-wrap')
    )
    const leftElements = sectionElements.filter((_, index) => index % 2 === 0)
    const rightElements = sectionElements.filter((_, index) => index % 2 !== 0)

    gsap.from(section, {
      y: 36,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    })

    if (leftElements.length > 0) {
      gsap.from(leftElements, {
        x: -48,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 76%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    if (rightElements.length > 0) {
      gsap.from(rightElements, {
        x: 48,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 76%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  })

  cleanupFns.push(() => ScrollTrigger.getAll().forEach((trigger) => trigger.kill()))
})

onBeforeUnmount(() => {
  cleanupFns.forEach((cleanup) => cleanup())
})
</script>
<style scoped>
</style>