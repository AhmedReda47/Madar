<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useRequestURL, useRoute, useSeoMeta } from '#app'

const route = useRoute()
const requestURL = useRequestURL()
const madarLogoPath = '/images/MadarLogo.png'
const siteName = 'Madar'
const siteSlogan = 'Build Your digital product'
const siteUrl = computed(() => requestURL.origin)

const defaultDescription =
  `${siteSlogan}. Madar is a software company delivering modern web and mobile solutions, UI/UX design, and scalable digital products that help businesses grow faster.`

const canonicalUrl = computed(() => new URL(route.path || '/', requestURL.origin).toString())
const ogImageUrl = computed(() => new URL(madarLogoPath, requestURL.origin).toString())
const organizationSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl.value,
  logo: ogImageUrl.value,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@Madar.io',
      telephone: '+201014767027',
      availableLanguage: ['en'],
    },
  ],
  sameAs: ['https://www.linkedin.com', 'https://www.facebook.com', 'https://x.com'],
}))
const websiteSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  alternateName: siteSlogan,
  url: siteUrl.value,
  inLanguage: 'en',
}))
const professionalServiceSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  url: siteUrl.value,
  image: ogImageUrl.value,
  email: 'contact@Madar.io',
  telephone: '+201014767027',
  areaServed: 'Worldwide',
}))

useSeoMeta({
  title: 'Bold Growth',
  description: defaultDescription,
  ogType: 'website',
  ogSiteName: 'Madar',
  ogTitle: 'Bold Growth | Madar',
  ogDescription: defaultDescription,
  ogImage: ogImageUrl,
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Bold Growth | Madar',
  twitterDescription: defaultDescription,
  twitterImage: ogImageUrl,
})

useHead(() => ({
  title: 'Bold Growth',
  titleTemplate: '%s | Madar - مدار',
  meta: [
    { name: 'description', content: defaultDescription },
    {
      name: 'keywords',
      content:
        'Madar, software company, web development, mobile app development, UI UX design, digital product development',
    },
    { name: 'author', content: 'Madar' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: madarLogoPath },
    { rel: 'shortcut icon', type: 'image/png', href: madarLogoPath },
    { key: 'canonical', rel: 'canonical', href: canonicalUrl.value },
  ],
  script: [
    {
      key: 'ld-organization',
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema.value),
    },
    {
      key: 'ld-website',
      type: 'application/ld+json',
      children: JSON.stringify(websiteSchema.value),
    },
    {
      key: 'ld-professional-service',
      type: 'application/ld+json',
      children: JSON.stringify(professionalServiceSchema.value),
    },
  ],
}))
</script>