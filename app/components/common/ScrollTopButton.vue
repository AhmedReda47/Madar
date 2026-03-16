<template>
  <transition name="scroll-fade">
    <button
      v-if="isVisible"
      type="button"
      class="scroll-top fixed bottom-6 right-6 z-[90]"
      :class="{ 'is-scrolling': isScrolling }"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <span class="scroll-top-inner">
        <ChevronUp :size="20" />
      </span>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isVisible = ref(false)
const isScrolling = ref(false)
let scrollTimer: ReturnType<typeof setTimeout> | null = null

const onScroll = () => {
  if (!import.meta.client) return

  isVisible.value = window.scrollY > 180
  isScrolling.value = true

  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    isScrolling.value = false
  }, 150)
}

const scrollToTop = () => {
  if (!import.meta.client) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  if (!import.meta.client) return
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  window.removeEventListener('scroll', onScroll)
  if (scrollTimer) clearTimeout(scrollTimer)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  width: 52px;
  height: 52px;
  border-radius: 9999px;
  padding: 0;
  border: none;
  background: transparent;
}

.scroll-top::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    rgba(29, 114, 213, 0.2),
    rgba(29, 114, 213, 1),
    rgba(29, 114, 213, 0.2)
  );
  opacity: 0;
  transition: opacity 0.2s ease;
}

.scroll-top.is-scrolling::before {
  opacity: 1;
  animation: spin-border 1s linear infinite;
}

.scroll-top-inner {
  position: absolute;
  inset: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  background: #000;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.scroll-fade-enter-active,
.scroll-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@keyframes spin-border {
  to {
    transform: rotate(360deg);
  }
}
</style>
