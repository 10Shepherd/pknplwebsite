<template>
  <div class="home">
    <HeroSection />

    <section
      class="features"
      v-motion
      :initial="{ y: 50, opacity: 0 }"
      :visible-once="{ y: 0, opacity: 1 }"
      :transition="{ duration: 800 }"
    >
      <div class="container">
        <h2 class="section-title">Why Choose Parth as your Training Partner?</h2>
        <div class="features-grid">
          <div
            class="feature-card"
            v-for="(feature, index) in features"
            :key="index"
            v-motion
            :initial="{ y: 30, opacity: 0 }"
            :visible-once="{ y: 0, opacity: 1 }"
            :transition="{ duration: 600, delay: index * 100 }"
            :whileHover="{ y: -5, scale: 1.02 }"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'

const features = [
  {
    icon: '🌐',
    title: 'Vast Network Reach',
    description:
      'Parth’s 2,500+ centers across Maharashtra, Rajasthan, and Gujarat ensure ALCs tap into a proven, widespread infrastructure for delivering MKCL courses like MS-CIT to diverse communities.',
  },
  {
    icon: '🏆',
    title: 'Top-Performing Partner',
    description:
      'Awarded MKCL’s Best Training Partner, Parth guarantees reliable, high-quality support, ensuring ALCs meet standards and deliver exceptional training.',
  },
  {
    icon: '🛠️',
    title: 'Robust Operational Support',
    description:
      'Parth provides OnCeT certifications, SOLAR login access, and marketing tools like social media and events to streamline ALC operations and boost enrollment.',
  },
  {
    icon: '🎓',
    title: 'Skill-Focused Training',
    description:
      'Parth’s vocational programs and career profiling enhance ALC’s offerings, attracting learners with industry-relevant skills and employability-focused courses.',
  },
]
</script>

<style scoped>
.features {
  padding: 5rem 0;
  background: var(--off-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--text-dark);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-light);
  cursor: pointer;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.feature-card p {
  color: var(--text-gray);
  line-height: 1.6;
}
</style>
