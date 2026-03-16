<template>
  <section id="portfolio" class="lg:px-16 px-5 sm:px-8 mt-28">
    <SectionHeader class="[&_span]:bg-primary" label="OUR PORTFOLIO" title="AMAZING PROJECTS WITH OUR CLIENTS" />

    <Swiper
      class="portfolio-swiper mt-10"
      :modules="[Navigation]"
      :loop="true"
      :speed="650"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="project in projects" :key="project.id">
        <article class="portfolio-card">
          <div class="project-image-wrap">
            <NuxtImg
              :src="project.image"
              :alt="project.imageAlt"
              class="project-image"
              width="489"
              height="489"
              loading="lazy"
              decoding="async"
              format="webp"
            />
          </div>

          <div class="project-content">
            <p class="case-study-label font-semibold text-xs bg-blue-gradient-2 px-3 py-1.5 rounded font-inter">
              <span class="case-study-dot"></span>
              CASE STUDY
            </p>

            <div class="project-tags">
              <span v-for="tag in project.tags" :key="`${project.id}-${tag}`" class="project-tag !bg-white-10 px-3 py-1 rounded">{{ tag }}</span>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <p class="text-white-d7 font-inter text-base font-normal">{{ project.description }}</p>

            <ul class="project-benefits">
              <li v-for="benefit in project.benefits" :key="`${project.id}-${benefit}`">{{ benefit }}</li>
            </ul>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>

    <div class="mt-5 flex items-center justify-end gap-4">
      <button type="button" class="portfolio-nav-btn h-10 w-10" aria-label="Previous project" @click="goPrev">
        <img :src="LeftArrow" alt="Left arrow" class="h-4 w-4" />
      </button>
      <p class="text-xl text-white">
        <span class="font-medium font-inter text-xl">{{ activeSlide + 1 }}</span>
        <span class="text-text-secondary"> / {{ projects.length }}</span>
      </p>
      <button type="button" class="portfolio-nav-btn h-10 w-10" aria-label="Next project" @click="goNext">
        <img :src="RightArrow" alt="Right arrow" class="h-4 w-4" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import LeftArrow from '~/assets/icons/left-arrow.svg'
import RightArrow from '~/assets/icons/right-arrow.svg'
import { ref } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper/types'
import SectionHeader from '../ui/SectionHeader.vue'
import 'swiper/css'

const projects = [
  {
    id: 1,
    title: 'Mallora Platform',
    image: '/images/mallora.png',
    imageAlt: 'Mallora platform case study preview',
    tags: ['MOBILE APP', 'WEBSITE', 'DASHBOARD'],
    description:
      'Mallora is a multi-platform system designed to optimize the shopping experience for customers, improve ,operational efficiency for merchants, and provide advanced management tools for platform admins.',
    benefits: [
      'Free shipping over order $120',
      'Pay with multiple credit cards',
      'Within 30 days for an exchange',
      'Outstanding premium support',
    ],
  },
  {
    id: 2,
    title: 'Nexora Services',
    image: '/images/mallora.png',
    imageAlt: 'Nexora services web platform showcase',
    tags: ['WEBSITE', 'DASHBOARD'],
    description:
      'Nexora helps service businesses manage bookings, payments, and team workflows through a unified digital platform.',
    benefits: [
      'Real-time booking management',
      'Secure online payments',
      'Advanced analytics dashboard',
      'Role-based team permissions',
    ],
  },
  {
    id: 3,
    title: 'Vantage Mobile Suite',
    image: '/images/mallora.png',
    imageAlt: 'Vantage mobile application project overview',
    tags: ['MOBILE APP', 'DASHBOARD'],
    description:
      'Vantage is a mobile-first product suite focused on seamless user journeys, fast onboarding, and scalable back-office operations.',
    benefits: [
      'Fast onboarding in under 3 minutes',
      'Cross-platform app performance',
      'Smart notification workflows',
      'Dedicated support and maintenance',
    ],
  },
]

const activeSlide = ref(0)
const swiperInstance = ref<SwiperType | null>(null)

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
  activeSlide.value = swiper.realIndex ?? 0
}

const onSlideChange = (swiper: SwiperType) => {
  activeSlide.value = swiper.realIndex ?? 0
}

const goPrev = () => {
  swiperInstance.value?.slidePrev()
}

const goNext = () => {
  swiperInstance.value?.slideNext()
}
</script>

<style scoped>
.portfolio-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;
}

.project-image-wrap {
  border-radius: 1.25rem;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
  border-radius: 1.25rem;
  transition: transform 0.35s ease;
  will-change: transform;
}

.project-image-wrap:hover .project-image {
  transform: scale(1.08);
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.case-study-label {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.55rem;
  color: var(--color-white);
  width: fit-content;
}

.case-study-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.25rem;
  background: #fff;
  animation: dot-blink 1.3s steps(1, end) infinite;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  color: var(--text-primary);
  font-size: 0.72rem;
  font-weight: 400;
  font-family: inter;
}

.project-title {
  font-weight: 600;
  font-family: inter;
  color: var(--color-white);
}

.project-benefits {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem 1.2rem;
  color: var(--color-white-d7);
  font-family: inter;
}

.portfolio-nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-blue-gradient-2);
  background: var(--color-blue-gradient-2);
  color: var(--color-white);
  transition: opacity 0.2s ease;
}

.portfolio-nav-btn:hover {
  opacity: 0.85;
}

@keyframes dot-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

@media (min-width: 1024px) {
  .portfolio-card {
    grid-template-columns: minmax(0, 46%) minmax(0, 54%);
    gap: 2.8rem;
  }

  .project-image {
    min-height: 470px;
  }

  .project-title {
    font-size: 3.1rem;
  }

  .project-benefits {
    grid-template-columns: 1fr 1fr;
  }
}
</style>