<template>
    <section id="clients" class="lg:px-16 px-5 sm:px-8 mt-28">
    <div class="rounded-[1.875rem] border border-white-10 py-10 ">
      <SectionHeader class="[&_span]:bg-primary" label="OUR CLIENTS" title="Madar Clients" />

      <div class="mt-10 grid grid-cols-2 place-items-center gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="item in clientItems"
          :key="item.id"
          class="group flex h-[90px] w-[140px] items-center justify-center rounded-xl border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-primary-2 hover:bg-white/5"
        >
          <NuxtImg
            src="/images/Client-Image.png"
            :alt="`Client company logo ${item.id}`"
            class="max-h-[56px] w-auto max-w-[120px] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            width="120"
            height="56"
            loading="lazy"
            decoding="async"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'

const clientItems = Array.from({ length: 12 }, (_, index) => ({ id: index + 1 }))
</script>
<style scoped>
</style>