<template>
  <header class="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8 lg:px-16">
    <div class="flex items-center justify-between rounded-xl bg-black/60 px-4 py-3 backdrop-blur">
      <NuxtImg
        src="/images/MadarLogo.png"
        alt="Madar company logo"
        class="h-14 object-contain md:h-16 lg:h-14"
        width="160"
        height="64"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        format="webp"
      />

      <nav class="hidden items-center gap-8 text-lg text-white lg:flex">
        <NuxtLink to="/#home" class="nav-link" :class="{ 'nav-link-active': activeSection === 'home' }">Home</NuxtLink>
        <NuxtLink to="/#portfolio" class="nav-link" :class="{ 'nav-link-active': activeSection === 'portfolio' }">Portfolio</NuxtLink>
        <NuxtLink to="/#about-us" class="nav-link" :class="{ 'nav-link-active': activeSection === 'about-us' }">About Us</NuxtLink>
        <NuxtLink to="/#services" class="nav-link" :class="{ 'nav-link-active': activeSection === 'services' }">Services</NuxtLink>
      </nav>

      <PrimaryButton class="hidden bg-primary px-6 py-2 text-lg text-white shadow-lg lg:inline-flex">
        Start a Project
      </PrimaryButton>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white lg:hidden"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <MenuIcon v-if="!isMenuOpen" :size="24" />
        <CloseIcon v-else :size="24" />
      </button>
    </div>

    <transition name="menu-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[120] bg-black/95 px-6 py-8 backdrop-blur-sm lg:hidden">
        <div class="menu-head mb-10 flex items-center justify-between">
          <NuxtImg
            src="/images/MadarLogo.png"
            alt="Madar company logo"
            class="h-16 object-contain"
            width="160"
            height="64"
            loading="lazy"
            decoding="async"
            format="webp"
          />
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <CloseIcon :size="24" />
          </button>
        </div>

        <nav class="flex flex-col gap-5 text-xl text-white md:text-lg">
          <NuxtLink to="/#home" class="nav-link-mobile text-left" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/#services" class="nav-link-mobile text-left" @click="closeMenu">Services</NuxtLink>
          <NuxtLink to="/#portfolio" class="nav-link-mobile text-left" @click="closeMenu">Portfolio</NuxtLink>
          <NuxtLink to="/#about-us" class="nav-link-mobile text-left" @click="closeMenu">About Us</NuxtLink>
        </nav>

        <PrimaryButton class="menu-cta mt-8 w-full bg-primary py-2 text-base text-white md:mt-6 md:py-2 md:text-sm" @click="closeMenu">
          Start a Project
        </PrimaryButton>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PrimaryButton from '~/components/home/PrimaryButon.vue'

const isMenuOpen = ref(false)
const activeSection = ref('home')
const route = useRoute()

const closeMenu = () => {
  isMenuOpen.value = false
}

const updateActiveSection = () => {
  if (!import.meta.client) return
  if (route.path !== '/') {
    activeSection.value = ''
    return
  }

  const ids = ['home', 'services', 'portfolio', 'about-us']
  const offset = 140
  const currentY = window.scrollY + offset
  const visibleSections = ids
    .map((id) => ({ id, el: document.getElementById(id) }))
    .filter((item): item is { id: string; el: HTMLElement } => Boolean(item.el))
    .map((item) => ({ id: item.id, top: item.el.offsetTop }))
    .filter((item) => currentY >= item.top)

  if (!visibleSections.length) {
    activeSection.value = 'home'
    return
  }

  const latest = visibleSections.reduce((prev, current) =>
    current.top > prev.top ? current : prev,
  )

  activeSection.value = latest.id
}

watch(isMenuOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.body.style.overflow = ''
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', updateActiveSection)
})

onMounted(async () => {
  if (!import.meta.client) return
  await nextTick()
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('resize', updateActiveSection)
})
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.25s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
}

.menu-head {
  animation: slide-in-up 0.35s ease both;
}

.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #0083c9;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  border-radius: 9999px;
  background: #0083c9;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link-active::after {
  transform: scaleX(1);
}

.nav-link:active {
  color: #1d72d5;
}

.nav-link-mobile {
  color: rgba(255, 255, 255, 0.95);
  transition: color 0.2s ease;
  animation: slide-in-up 0.45s ease both;
}

.nav-link-mobile:nth-child(1) {
  animation-delay: 0.06s;
}

.nav-link-mobile:nth-child(2) {
  animation-delay: 0.12s;
}

.nav-link-mobile:nth-child(3) {
  animation-delay: 0.18s;
}

.nav-link-mobile:nth-child(4) {
  animation-delay: 0.24s;
}

.nav-link-mobile:hover {
  color: #0083c9;
}

.nav-link-mobile:active {
  color: #1d72d5;
}

.menu-cta {
  animation: slide-in-up 0.45s ease both;
  animation-delay: 0.28s;
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>