<template>
  <section id="home" class="relative overflow-hidden h-[36rem] min-[390px]:h-[40rem] sm:h-[44rem] lg:h-[49.6875rem]">
    <NuxtImg
      src="/images/Video.png"
      alt="Madar team collaborating on digital product development"
      class="w-full h-full object-cover"
      width="1920"
      height="795"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      format="webp"
    />
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: linear-gradient(180deg, #00000000 0%, #00000099 90%, #000000F2 95%);"
    ></div>
    <div class="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 class="text-white text-3xl font-medium leading-tight min-[390px]:text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.25]">
          <span class="font-bold">Madar</span> Software Company for Web, Mobile, and Product Design
        </h1>
        <div class="mt-3 flex flex-col gap-4">
          <p class="text-text-primary text-base font-medium leading-7 sm:text-lg md:text-xl md:leading-9">
            We Design and Build Website, mobile app and Dashboard that help StartUp Lanch and Grow With Confidece
          </p>
          <div class="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:gap-6">
            <PrimaryButton class="w-full border border-white/30 !bg-white/5 px-6 py-3 text-sm font-semibold sm:w-auto">
              Start a Project
            </PrimaryButton>
            <PrimaryButton class="w-full border border-white/30 !bg-white/5 px-6 py-3 text-sm font-semibold sm:w-auto">
              Free consultation
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import PrimaryButton from '../home/PrimaryButon.vue';
</script>
<style scoped>
</style>