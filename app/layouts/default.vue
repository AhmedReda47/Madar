<template>
  <div class="min-h-screen bg-black text-white">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <ScrollTopButton />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppHeader from '~/components/layouts/AppHeader.vue'
import ScrollTopButton from '~/components/common/ScrollTopButton.vue'
</script>