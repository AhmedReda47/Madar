<template>
  <section id="about-us" class=" mt-28 lg:px-16 px-5 sm:px-8">
    <div class="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
      <div class="relative mx-auto w-full lg:mx-20">
        <NuxtImg
          src="/images/Vision-Image.png"
          alt="Madar team planning product strategy and digital innovation"
          class="w-full max-w-[30.5625rem] rounded-[1.75rem] object-cover shadow-[0_0_80px_rgba(0,131,201,0.45)] mx-auto lg:mx-5"
          width="489"
          height="489"
          loading="lazy"
          decoding="async"
          format="webp"
        />
      </div>

      <div class="space-y-5">
        <SectionHeader class="font-semibold font-inter [&_span]:bg-white [&_span]:h-2.5 [&_span]:w-2.5 [&_p]:bg-blue-gradient-2 [&_p]:w-fit [&_p]:rounded [&_p]:text-white [&_p]:text-xs [&_p]:px-3 [&_p]:py-1.5 [&_h2]:text-5xl mb-10" align="left" label="Our Vision" title="What did we strive to achieve?" />
        <p class="max-w-[42rem] text-base text-text-secondary font-normal font-inter">
          We strive to reshape the future by delivering exceptional experiences that seamlessly blend
          creativity, simplicity, and smart technology.
        </p>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-1 md:mt-16 lg:-mt-8 lg:grid-cols-4">
      <AboutFeatureCard
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import AboutFeatureCard from './AboutFeatureCard.vue'
import SectionHeader from '../ui/SectionHeader.vue'

const items = [
  {
    title: 'Our Story',
    description: 'We started with a simple idea: to build products that people love.',
  },
  {
    title: 'Our Vision',
    description: 'To create simple, smart, and unforgettable digital experiences.',
  },
  {
    title: 'Best quality products',
    description: 'Crafted with care, built to last, and designed for you.',
  },
  {
    title: 'Powerful product strategy',
    description: 'Smart planning and deep insights for products that truly succeed.',
  },
]
</script>
<style scoped>
</style>