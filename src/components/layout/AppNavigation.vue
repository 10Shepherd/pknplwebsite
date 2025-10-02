<template>
  <nav
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
    v-motion
    :initial="{ y: -100, opacity: 0 }"
    :enter="{ y: 0, opacity: 1 }"
    :transition="{ duration: 800, ease: 'easeOut' }"
    aria-label="Primary navigation"
  >
    <div class="nav-container">
      <div class="nav-logo">
        <h2 class="site-title">
          <router-link to="/" class="site-title-link">Parth Knowledge Network</router-link>
        </h2>
      </div>

      <!-- Desktop Navigation -->
      <ul class="nav-links desktop-nav" role="menubar" aria-label="Primary">
        <li role="none"><router-link to="/" class="nav-link" role="menuitem" @mouseenter="prefetch('home')">Home</router-link></li>
        <li role="none"><router-link to="/about" class="nav-link" role="menuitem" @mouseenter="prefetch('about')">About</router-link></li>
        <li role="none"><router-link to="/services" class="nav-link" role="menuitem" @mouseenter="prefetch('services')">Services</router-link></li>
        <li role="none"><router-link to="/contact" class="nav-link" role="menuitem" @mouseenter="prefetch('contact')">Contact</router-link></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-btn"
        type="button"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
        :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
        aria-controls="primary-navigation"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Desktop CTA Button -->
      <button
        class="cta-button desktop-cta"
        v-motion
        :whileHover="{ scale: 1.05 }"
        :whileTap="{ scale: 0.95 }"
        @click="$router.push('/get-started')"
      >
        Get Started
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="primary-navigation" class="mobile-nav" :class="{ 'mobile-nav-open': isMobileMenuOpen }" :aria-hidden="isMobileMenuOpen ? 'false' : 'true'" role="dialog" aria-modal="true">
      <ul class="mobile-nav-links">
        <li>
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/services" class="mobile-nav-link" @click="closeMobileMenu"
            >Services</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu"
            >Contact</router-link
          >
        </li>
        <li>
          <button
            class="mobile-cta-button"
            @click="
              () => {
                $router.push('/get-started')
                closeMobileMenu()
              }
            "
          >
            Get Started
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when mobile menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'auto'
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Close mobile menu on window resize
const handleResize = () => {
  if (window.innerWidth > 768 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = 'auto' // Ensure body scroll is restored
})

// Prefetch route chunks on hover for faster perceived speed on good networks
const canPrefetch = (): boolean => {
  const info = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection
  const saveData = Boolean(info && info.saveData)
  const slow = Boolean(info && info.effectiveType && /(^|-)2g$|^slow-2g$/.test(info.effectiveType))
  return !saveData && !slow
}

const prefetch = (name: 'home' | 'about' | 'services' | 'contact') => {
  if (!canPrefetch()) return
  switch (name) {
    case 'home':
      import('../../views/HomeView.vue')
      break
    case 'about':
      import('../../views/AboutView.vue')
      break
    case 'services':
      import('../../views/ServicesView.vue')
      break
    case 'contact':
      import('../../views/ContactView.vue')
      break
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgb(31, 41, 55);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgb(31, 41, 55);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-light);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-logo h2 {
  font-weight: 700;
  color: white;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #60a5fa;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #60a5fa;
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
  transition: all 0.3s ease;
}

.cta-button:hover {
  box-shadow: var(--shadow-medium);
  background: #1d4ed8;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 2rem;
  height: 0.25rem;
  background: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.mobile-menu-btn.active .hamburger-line:first-child {
  transform: rotate(45deg);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--primary-white);
  border-top: 1px solid var(--medium-gray);
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  display: none;
}

.mobile-nav-open {
  transform: translateY(0);
}

.mobile-nav-links {
  list-style: none;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 1.1rem;
  border-bottom: 1px solid var(--light-gray);
  transition: color 0.3s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--accent-color);
}

.mobile-cta-button {
  width: 100%;
  padding: 1rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.mobile-cta-button:hover {
  background: #1d4ed8;
}

/* Responsive Design */
/* Tablet Styles */
@media (max-width: 1024px) {
  .nav-container {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .cta-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }

  .nav-logo h2 {
    font-size: 1.2rem;
  }
}

/* Small Mobile Styles */
@media (max-width: 480px) {
  .nav-container {
    padding: 0.75rem;
  }

  .nav-logo h2 {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mobile-nav-links {
    padding: 1.5rem;
  }

  .mobile-nav-link {
    padding: 0.75rem 0;
  }
}

/* Large Desktop Styles */
@media (min-width: 1440px) {
  .nav-container {
    max-width: 1400px;
    padding: 1.25rem 2rem;
  }

  .nav-links {
    gap: 2.5rem;
  }

  .nav-logo h2 {
    font-size: 1.6rem;
  }

  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1.1rem;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .navbar,
  .nav-link::after,
  .hamburger-line,
  .mobile-nav,
  .mobile-nav-link,
  .mobile-cta-button {
    transition: none;
  }
}
</style>
