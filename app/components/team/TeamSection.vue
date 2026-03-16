<template>
  <section id="team" ref="sectionRef" class="lg:px-16 px-5 sm:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <div v-for="item in stats" :key="item.label" class="flex justify-center">
        <PrimaryCard :value="item.value" :label="item.label" :start="startCount" />
      </div>
    </div>
    <SectionHeader class="[&_span]:bg-primary mt-28" label="OUR GLOBAL TEAM" title="We have a distinguished team for all services" />

    <Swiper
      class="team-swiper mt-10"
      :modules="[Autoplay, Pagination]"
      :centered-slides="true"
      :loop="true"
      :grab-cursor="true"
      :autoplay="{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: false }"
      :speed="650"
      :slides-per-view="1.2"
      :space-between="14"
      :breakpoints="swiperBreakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="member in teamMembers" :key="member.id">
        <article class="relative mx-auto h-[22rem] w-[15rem] overflow-hidden rounded-2xl sm:h-[24rem] sm:w-[16.5rem] lg:h-[25rem] lg:w-[17.5rem]">
          <NuxtImg
            :src="member.image"
            :alt="`Team member ${member.name}, ${member.role}`"
            class="h-full w-full object-cover"
            width="280"
            height="400"
            loading="lazy"
            decoding="async"
            format="webp"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80"></div>
          <div class="team-card-gradient absolute bottom-0 left-0 z-[1] h-[15.99rem] w-full"></div>
          <div class="team-socials absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3">
            <a
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-black/90 text-white transition hover:bg-blue-gradient border-blue-gradient"
              aria-label="LinkedIn"
            >
              <NuxtImg :src="LinkedinPrimary" alt="" class="h-[1.125rem;] w-[1.125rem;] object-contain" width="18" height="18" loading="lazy" decoding="async" />
            </a>
            <a 
              :href="member.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-black/90 text-white transition hover:bg-blue-gradient border-blue-gradient"
              aria-label="Facebook"
            >
              <NuxtImg :src="FacebookPrimary" alt="" class="h-[1.125rem;] w-[1.125rem;] object-contain" width="18" height="18" loading="lazy" decoding="async" />
            </a>
            <a
              :href="member.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-gradient bg-black/90 hover:bg-blue-gradient text-white transition"
              aria-label="Twitter"
            >
              <NuxtImg :src="TwitterPrimary" alt="" class="h-[1.125rem;] w-[1.125rem;] object-contain" width="18" height="18" loading="lazy" decoding="async" />
            </a>
          </div>
          <div class="absolute bottom-5 left-5 z-10">
            <h3 class="text-3xl font-medium text-white">{{ member.name }}</h3>
            <p class="font-normal text-text-primary mt-1">{{ member.role }}</p>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>

    <div class="mt-4 flex items-center justify-center gap-2">
      <button
        v-for="(_, index) in teamMembers"
        :key="`team-dot-${index}`"
        type="button"
        class="team-dot"
        :class="{ 'team-dot-active': activeDot === index }"
        :aria-label="`Go to team member ${index + 1}`"
        @click="goToSlide(index)"
      ></button>
    </div>
  </section>
</template>
<script setup lang="ts">
import FacebookPrimary from '~/assets/icons/facebook-primary.svg'
import LinkedinPrimary from '~/assets/icons/linkedin-primary.svg'
import TwitterPrimary from '~/assets/icons/twitter-primary.svg'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper/types'
import PrimaryCard from './TeamCard.vue'
import SectionHeader from '../ui/SectionHeader.vue'
import 'swiper/css'
import 'swiper/css/pagination'

const stats = [
  { value: 50, label: 'Complete website' },
  { value: 24, label: 'Satisfied customer' },
  { value: 15, label: 'Mobile application' },
  { value: 80, label: 'Complete project' },
]

const teamMembers = [
  {
    id: 1,
    name: 'Amr Talaat',
    role: 'UI/UX Designer',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    role: 'Frontend Developer',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
  {
    id: 3,
    name: 'Ali Hassan',
    role: 'Backend Developer',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
  {
    id: 4,
    name: 'Mona Reda',
    role: 'Product Designer',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
  {
    id: 5,
    name: 'Yousef Adel',
    role: 'Project Manager',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
  {
    id: 6,
    name: 'Amr Talaat',
    role: 'UI/UX Designer',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
  {
    id: 7,
    name: 'Sara Ahmed',
    role: 'Frontend Developer',
    image: '/images/Video.png',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://x.com',
  },
]

const swiperBreakpoints = {
  360: { slidesPerView: 1.15, spaceBetween: 12 },
  390: { slidesPerView: 1.25, spaceBetween: 12 },
  640: { slidesPerView: 1.8, spaceBetween: 16 },
  768: { slidesPerView: 2.2, spaceBetween: 18 },
  1024: { slidesPerView: 3, spaceBetween: 22 },
  1280: { slidesPerView: 3.2, spaceBetween: 24 },
}

const swiperInstance = ref<SwiperType | null>(null)
const activeDot = ref(0)

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
  activeDot.value = swiper.realIndex ?? 0
}

const onSlideChange = (swiper: SwiperType) => {
  activeDot.value = swiper.realIndex ?? 0
}

const goToSlide = (index: number) => {
  swiperInstance.value?.slideToLoop(index)
}

const sectionRef = ref<HTMLElement | null>(null)
const startCount = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!import.meta.client || !sectionRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (!entry.isIntersecting) return
      startCount.value = true
      observer?.disconnect()
      observer = null
    },
    { threshold: 0.35 },
  )

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
<style scoped>
.team-swiper :deep(.swiper-slide) {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.team-swiper :deep(.swiper-slide-active) {
  opacity: 1;
}

.team-swiper :deep(.team-socials) {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-50%) translateX(8px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
}

.team-swiper :deep(.swiper-slide-active .team-socials) {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(-50%) translateX(0);
}

.team-card-gradient {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.team-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: var(--color-text-primary);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.team-dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

.team-dot-active {
  background: #0083c9;
  transform: scale(1.05);
  width: 20px;
}
</style>