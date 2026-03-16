<template>
  <section class="my-16 md:my-24 lg:my-28 lg:px-16 px-5 sm:px-8">
    <SectionHeader class="[&_span]:bg-primary" label="Global Network" title="Our Global Presence" />
    <div class="overflow-hidden bg-black">
      <div class="relative mx-auto mt-8 w-full">
        <div class="hidden lg:block">
          <img
            :src="NorthCircle"
            alt="North circle"
            class="absolute left-[17%] top-[30%] h-11 w-11 object-contain object-center"
          />
          <span class="absolute left-[19%] top-[25%] text-2xl font-normal text-white">North America</span>
          <img
            :src="EuropeCircle"
            alt="Europe circle"
            class="absolute left-[50%] top-[12.5%] h-11 w-11 object-contain object-center"
          />
          <span class="absolute left-[44%] top-[8%] text-2xl font-normal text-white">Europe</span>
          <img
            :src="AsiaCircle"
            alt="Asia circle"
            class="absolute right-[17%] top-[22%] h-11 w-11 object-contain object-center"
          />
          <span class="absolute right-[13%] top-[27%] text-2xl font-normal text-white">Asia</span>
          <img
            :src="MiddleCircle"
            alt="Middle East circle"
            class="absolute left-[43%] top-[24%] h-[23.1875rem] w-[23.1875rem] object-contain object-center"
          />
          <span class="absolute left-[49%] top-[48%] text-4xl font-normal text-white">Middle East</span>
        </div>

        <NuxtImg
          src="/images/map-world.png"
          alt="World map showing Madar global coverage"
          class="w-full object-contain object-center opacity-85"
          width="1120"
          height="560"
          loading="lazy"
          decoding="async"
          format="webp"
        />

        <div class="mt-6 grid grid-cols-1 gap-4 p-1 sm:grid-cols-2 md:gap-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:grid-cols-4 lg:gap-0 lg:px-6">
        <article
          v-for="item in stats"
          :key="item.label"
          class="mx-auto h-40 w-full max-w-[18.75rem] rounded-[1.25rem] border border-white-10 bg-white-33/20 p-5 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white-33/20 hover:bg-white-14"
        >
          <p class="font-inter text-5xl font-light text-white">{{ item.value }}</p>
          <p class="font-inter mt-2 text-base font-medium text-white">{{ item.label }}</p>
          <p class="font-inter mt-1 text-sm font-normal text-text-secondary">{{ item.subtitle }}</p>
        </article>
      </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import NorthCircle from '~/assets/icons/north-circle.svg'
import EuropeCircle from '~/assets/icons/europe-circle.svg'
import AsiaCircle from '~/assets/icons/asia-circle.svg'
import MiddleCircle from '~/assets/icons/middle-circle.svg'
const stats = [
  { value: 10, label: 'Global Offices', subtitle: 'Across 5 Continents' },
  { value: 9, label: 'Countries', subtitle: 'Strategic presence' },
  { value: 250, label: 'Expert Consultants', subtitle: 'Industry specialists' },
  { value: 78, label: 'Enterprise Clients', subtitle: 'Trusted partnerships' },
]
</script>
<style scoped>
</style>