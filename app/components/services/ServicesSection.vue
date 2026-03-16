<template>
  <section id="services" class=" mt-28 lg:px-16 px-5 sm:px-8 ">
    <SectionHeader class="[&_span]:bg-primary" label="OUR SERVICES" title="Digital services to grow your business" />

    <div class="mt-10 hidden w-full items-center justify-center gap-4 lg:flex">
      <article
        v-for="(service, index) in services"
        :key="service.title"
        class="group relative h-[320px] overflow-hidden rounded-3xl border transition-all duration-500 ease-out"
        :class="activeIndex === index ? 'border-primary-2 shadow-[0_0_30px_rgba(0,131,201,0.35)]' : 'border-white-10'"
        :style="{ width: activeIndex === index ? '720px' : '255px' }"
        tabindex="0"
        @mouseenter="activeIndex = index"
        @focus="activeIndex = index"
      >
        <NuxtImg
          :src="service.image"
          :alt="service.title"
          class="h-full w-full object-cover"
          width="720"
          height="320"
          loading="lazy"
          decoding="async"
          format="webp"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/80"></div>
        <div class="absolute bottom-6 left-6 right-6 z-10">
          <h3 class="text-lg font-semibold leading-7 text-white">{{ service.title }}</h3>
          <p v-if="activeIndex === index" class="mt-1.5 max-w-[36rem] font-normal text-text-secondary-gray">
            {{ service.description }}
          </p>
        </div>
      </article>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-4 lg:hidden">
      <article
        v-for="service in services"
        :key="`${service.title}-mobile`"
        class="relative h-[320px] overflow-hidden rounded-3xl border border-white-10"
      >
        <NuxtImg
          :src="service.image"
          :alt="service.title"
          class="h-full w-full object-cover"
          width="720"
          height="320"
          loading="lazy"
          decoding="async"
          format="webp"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/80"></div>
        <div class="absolute bottom-5 left-5 right-5 z-10">
          <h3 class="text-2xl font-semibold text-white">{{ service.title }}</h3>
          <p class="mt-2 text-base leading-7 text-text-primary">{{ service.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '../ui/SectionHeader.vue'

const activeIndex = ref(1)

const services = [
  {
    title: 'Mobile Development',
    image: '/images/Mobile-Development-Image.png',
    description: 'Developing native and cross-platform mobile apps that provide flawless performance on any device.',
  },
  {
    title: 'UI/UX Design',
    image: '/images/UI-UX-Image.png',
    description: 'Crafting intuitive and visually stunning interfaces that deliver seamless user experiences.',
  },
  {
    title: 'Web Development',
    image: '/images/Web-Development.png',
    description: 'Building fast, secure, and scalable websites tailored to elevate your digital presence.',
  },
]
</script>
<style scoped>
</style>