<template>
  <nav
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
    v-motion
    :initial="{ y: -100, opacity: 0 }"
    :enter="{ y: 0, opacity: 1 }"
    :transition="{ duration: 800, ease: 'easeOut' }"
  >
    <div class="nav-container">
      <div class="nav-logo">
        <h2>Parth Knowledge Network</h2>
      </div>

      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/services" class="nav-link">Services</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>

      <button
        class="cta-button"
        v-motion
        :whileHover="{ scale: 1.05 }"
        :whileTap="{ scale: 0.95 }"
        @click="$router.push('/get-started')"
      >
        Get Started
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: var(--medium-gray);
  box-shadow: var(--shadow-light);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h2 {
  font-weight: 700;
  color: var(--text-dark);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-gray);
  font-weight: 500;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-light);
}

.cta-button:hover {
  box-shadow: var(--shadow-medium);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
