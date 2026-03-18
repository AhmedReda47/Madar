<template>
  <section class="my-16 md:my-24 lg:my-28 lg:px-16 px-5 sm:px-8">
    <SectionHeader class="[&_span]:bg-primary" label="Global Network" title="Our Global Presence" />
    <div class="overflow-hidden bg-black">
      <div class="relative mx-auto mt-8 w-full">
        <div class="absolute top-10 left-0 w-full grid grid-cols-2 lg:grid-cols-6 place-items-center justify-center gap-2 text-sm md:text-lg font-normal text-white">
            <span>Canada</span>
            <span>Barcelona</span>
            <span>Egypt</span>
            <span>Jordan</span>
            <span>Saudi Arabia</span>
            <span>Dubai</span>
            </div>
        <div class="hidden lg:block">
          
          <span class="blink-dot inline-block h-3 w-3 bg-primary absolute left-[17%] top-[22%] h-11 w-11 object-contain object-center rounded-full "></span>
          <span class="blink-dot inline-block h-3 w-3  rounded-full bg-primary-2 absolute left-[45%] top-[40%] h-11 w-11 object-contain object-center"></span>
          <span class="blink-dot inline-block h-3 w-3  rounded-full bg-primary-2 absolute left-[54%] top-[50%] h-11 w-11 object-contain object-center"></span>
          <span class="blink-dot inline-block h-3 w-3  rounded-full bg-primary-2 absolute left-[58.5%] top-[52%] h-11 w-11 object-contain object-center"></span>
          <span class="blink-dot inline-block h-3 w-3  rounded-full bg-primary-2 absolute left-[57%] top-[47%] h-11 w-11 object-contain object-center"></span>
          <span class="blink-dot inline-block h-3 w-3  rounded-full bg-primary-2 absolute left-[61%] top-[54%] h-11 w-11 object-contain object-center"></span>
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
        <div class="mt-6 grid grid-cols-2 gap-4 p-1 sm:grid-cols-2 md:gap-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:grid-cols-4 lg:gap-0 lg:px-6">
        <article
          v-for="item in stats"
          :key="item.label"
          class="mx-auto flex h-32 w-full max-w-[18.75rem] flex-col items-center justify-center rounded-[1.25rem] border border-white-10 bg-white-33/20 p-2 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white-33/20 hover:bg-white-14 md:h-40 md:p-5"
        >
          <p class="font-inter text-3xl md:text-5xl font-light text-white">{{ item.value }}</p>
          <p class="font-inter mt-2 text-sm md:text-base font-medium text-white">{{ item.label }}</p>
          <p class="font-inter mt-1 text-xs md:text-sm font-normal text-text-secondary">{{ item.subtitle }}</p>
        </article>
      </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
const stats = [
  { value: 10, label: 'Global Offices', subtitle: 'Across 5 Continents' },
  { value: 9, label: 'Countries', subtitle: 'Strategic presence' },
  { value: 250, label: 'Expert Consultants', subtitle: 'Industry specialists' },
  { value: 78, label: 'Enterprise Clients', subtitle: 'Trusted partnerships' },
]
</script>
<style scoped>
.blink-dot {
  animation: dot-blink 1.3s steps(1, end) infinite;
}

@keyframes dot-blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
</style>