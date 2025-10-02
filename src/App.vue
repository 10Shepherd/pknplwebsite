<template>
  <div id="app">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <AppNavigation />

    <main id="main-content" role="main" tabindex="-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in" :duration="{ enter: 500, leave: 300 }">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/layout/AppNavigation.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<style>
.page-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
