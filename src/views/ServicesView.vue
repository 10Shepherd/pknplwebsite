<template>
  <div class="services">
    <!-- Hero Section -->
    <section
      class="services-hero"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :transition="{ duration: 800 }"
    >
      <div class="container">
        <h1
          class="page-title"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 800, delay: 200 }"
        >
          Our Services
        </h1>
        <p
          class="page-subtitle"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 400 }"
        >
          Comprehensive training and support solutions to help you succeed as an MKCL Authorized
          Learning Center
        </p>
      </div>
    </section>

    <!-- Main Services Section -->
    <section class="main-services">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          What We Offer
        </h2>

        <div class="services-grid">
          <div
            class="service-card"
            v-for="(service, index) in mainServices"
            :key="index"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible-once="{ y: 0, opacity: 1 }"
            :transition="{ duration: 600, delay: index * 150 }"
            :whileHover="{ y: -5, scale: 1.02 }"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feature, i) in service.features" :key="i">
                <span class="feature-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
            <div class="service-footer">
              <span class="service-badge">{{ service.badge }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Programs Section -->
    <section class="course-programs">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Available Course Programs
        </h2>

        <div class="programs-grid">
          <div
            class="program-card"
            v-for="(program, index) in coursePrograms"
            :key="index"
            v-motion
            :initial="{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 700, delay: index * 200 }"
          >
            <div class="program-header">
              <div class="program-icon">{{ program.icon }}</div>
              <div class="program-info">
                <h3>{{ program.title }}</h3>
                <p class="program-subtitle">{{ program.subtitle }}</p>
              </div>
            </div>
            <div class="program-content">
              <p class="program-description">{{ program.description }}</p>
              <div class="program-details">
                <div class="detail-item">
                  <span class="detail-label">Duration:</span>
                  <span class="detail-value">{{ program.duration }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Target Audience:</span>
                  <span class="detail-value">{{ program.audience }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Certification:</span>
                  <span class="detail-value">{{ program.certification }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Services Section -->
    <section class="support-services">
      <div class="container">
        <div class="support-content">
          <div
            class="support-text"
            v-motion
            :initial="{ x: -50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800 }"
          >
            <h2>Comprehensive Support System</h2>
            <p class="support-intro">
              We provide end-to-end support to ensure your success as an MKCL Authorized Learning
              Center.
            </p>

            <div class="support-categories">
              <div
                class="support-category"
                v-for="(category, index) in supportCategories"
                :key="index"
                v-motion
                :initial="{ x: -30, opacity: 0 }"
                :visible-once="{ x: 0, opacity: 1 }"
                :transition="{ duration: 500, delay: index * 150 }"
              >
                <h4>
                  <span class="category-icon">{{ category.icon }}</span>
                  {{ category.title }}
                </h4>
                <ul>
                  <li v-for="(item, i) in category.items" :key="i">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="support-visual"
            v-motion
            :initial="{ x: 50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800, delay: 200 }"
          >
            <div class="support-stats">
              <div
                class="stat-item"
                v-for="(stat, index) in supportStats"
                :key="index"
                v-motion
                :initial="{ scale: 0.8, opacity: 0 }"
                :visible-once="{ scale: 1, opacity: 1 }"
                :transition="{ duration: 500, delay: 400 + index * 100 }"
              >
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container">
        <div
          class="cta-content"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 800 }"
        >
          <h2>Ready to Get Started?</h2>
          <p>
            Join our network of successful training centers and make a difference in your community.
          </p>
          <div class="cta-buttons">
            <button
              class="btn-primary"
              v-motion
              :whileHover="{ scale: 1.05, y: -2 }"
              :whileTap="{ scale: 0.95 }"
              @click="$router.push('/get-started')"
            >
              Start Registration Process
            </button>
            <button
              class="btn-secondary"
              v-motion
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
              @click="$router.push('/contact')"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const mainServices = [
  {
    icon: '🎓',
    title: 'Training & Certification',
    description:
      'Comprehensive training programs and certification support for your staff and learners.',
    features: [
      'OnCeT examination preparation',
      'Faculty training programs',
      'Certification assistance',
      'Continuous skill development',
    ],
    badge: 'Core Service',
  },
  {
    icon: '🛠️',
    title: 'Technical Support',
    description:
      'Complete technical infrastructure setup and ongoing support for smooth operations.',
    features: [
      'IT infrastructure setup',
      'Software installation',
      'Network configuration',
      '24/7 technical assistance',
    ],
    badge: 'Essential',
  },
  {
    icon: '📈',
    title: 'Marketing & Promotion',
    description: 'Marketing support to help you reach more learners and grow your center.',
    features: [
      'Digital marketing campaigns',
      'Local community events',
      'Social media support',
      'Brand visibility enhancement',
    ],
    badge: 'Growth',
  },
  {
    icon: '💼',
    title: 'Business Development',
    description:
      'Strategic guidance to help you build a sustainable and profitable training center.',
    features: [
      'Business strategy consultation',
      'Revenue optimization',
      'Operational guidance',
      'Performance monitoring',
    ],
    badge: 'Strategic',
  },
]

const coursePrograms = [
  {
    icon: '💻',
    title: 'MS-CIT (Maharashtra State Certificate in Information Technology)',
    subtitle: 'Digital Literacy Program',
    description:
      'The flagship program that has empowered over 15 million learners with essential computer skills and digital literacy.',
    duration: '3-4 months',
    audience: 'Students, Job seekers, Professionals',
    certification: 'Government recognized certificate',
  },
  {
    icon: '🌐',
    title: 'KLiC (Konark Learning in Computer)',
    subtitle: 'Advanced Computer Skills',
    description:
      'Advanced computer training program focusing on practical skills and industry-relevant knowledge.',
    duration: '6 months',
    audience: 'Working professionals, Graduates',
    certification: 'Industry recognized certificate',
  },
  {
    icon: '🎯',
    title: 'Vocational Training Programs',
    subtitle: 'Skill Development Courses',
    description:
      'Various skill development programs designed to enhance employability and career prospects.',
    duration: 'Variable (3-12 months)',
    audience: 'Youth, Job seekers',
    certification: 'Skill-based certificates',
  },
]

const supportCategories = [
  {
    icon: '🏗️',
    title: 'Setup & Infrastructure',
    items: [
      'Center setup guidance',
      'Equipment procurement assistance',
      'Infrastructure audit',
      'Compliance support',
    ],
  },
  {
    icon: '📚',
    title: 'Training & Development',
    items: [
      'Faculty training programs',
      'Curriculum support',
      'Teaching methodology',
      'Assessment guidance',
    ],
  },
  {
    icon: '🔧',
    title: 'Operations & Maintenance',
    items: [
      'Daily operations support',
      'System maintenance',
      'Software updates',
      'Troubleshooting assistance',
    ],
  },
]

const supportStats = [
  {
    number: '2500+',
    label: 'Active Centers',
  },
  {
    number: '24/7',
    label: 'Support Available',
  },
  {
    number: '15M+',
    label: 'Students Trained',
  },
  {
    number: '99%',
    label: 'Success Rate',
  },
]
</script>

<style scoped>
.services {
  min-height: 100vh;
  padding-top: 5rem;
}

/* Hero Section */
.services-hero {
  padding: 3rem 0;
  background: linear-gradient(135deg, var(--primary-white) 0%, var(--off-white) 100%);
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--text-gray);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-dark);
}

/* Main Services Section */
.main-services {
  padding: 5rem 0;
  background: var(--primary-white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: var(--off-white);
  padding: 2.5rem 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-light);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card:hover {
  box-shadow: var(--shadow-large);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.service-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.service-card p {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  margin: 0 0 1.5rem 0;
  padding: 0;
  flex-grow: 1;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-gray);
  font-size: 0.95rem;
}

.feature-icon {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 0.9rem;
}

.service-footer {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

.service-badge {
  background: var(--accent-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Course Programs Section */
.course-programs {
  padding: 5rem 0;
  background: var(--off-white);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.program-card {
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
}

.program-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-large);
}

.program-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
  color: white;
}

.program-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.program-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.program-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0;
}

.program-content {
  padding: 2rem;
}

.program-description {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.program-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--light-gray);
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 500;
  color: var(--text-dark);
}

.detail-value {
  color: var(--text-gray);
  font-size: 0.95rem;
}

/* Support Services Section */
.support-services {
  padding: 5rem 0;
  background: var(--primary-white);
}

.support-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

.support-text h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.support-intro {
  font-size: 1.1rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.support-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.support-category h4 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.category-icon {
  font-size: 1.3rem;
}

.support-category ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.support-category li {
  padding: 0.5rem 0;
  color: var(--text-gray);
  padding-left: 2rem;
  position: relative;
}

.support-category li::before {
  content: '•';
  color: var(--accent-color);
  position: absolute;
  left: 0.5rem;
  font-weight: bold;
}

.support-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.support-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.stat-item {
  background: var(--off-white);
  padding: 2rem 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-light);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-gray);
  font-weight: 500;
  font-size: 0.95rem;
}

/* CTA Section */
.services-cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--off-white) 0%, var(--primary-white) 100%);
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.cta-content p {
  font-size: 1.2rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
  min-height: 50px;
}

.btn-primary:hover {
  background: #1d4ed8;
  box-shadow: var(--shadow-large);
}

.btn-secondary {
  padding: 1rem 2rem;
  background: transparent;
  color: var(--text-dark);
  border: 2px solid var(--medium-gray);
  border-radius: var(--radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
}

.btn-secondary:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

/* Responsive Design */

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
    padding: 0 3rem;
  }

  .services-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }

  .programs-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .support-content {
    gap: 5rem;
  }

  .support-stats {
    gap: 3rem;
  }
}

/* Desktop (1024px - 1439px) */
@media (max-width: 1439px) and (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .support-content {
    gap: 3rem;
  }
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .container {
    padding: 0 1.5rem;
  }

  .services-hero,
  .main-services,
  .course-programs,
  .support-services,
  .services-cta {
    padding: 3rem 0;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .program-header {
    padding: 1.5rem;
  }

  .program-content {
    padding: 1.5rem;
  }

  .support-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .support-stats {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .stat-item {
    padding: 1.5rem 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

/* Mobile (481px - 767px) */
@media (max-width: 767px) {
  .container {
    padding: 0 1rem;
  }

  .services-hero {
    padding: 2rem 0;
  }

  .main-services,
  .course-programs,
  .support-services,
  .services-cta {
    padding: 2.5rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 2rem 1.5rem;
  }

  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .programs-grid {
    gap: 1.5rem;
  }

  .program-header {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1rem;
  }

  .program-icon {
    font-size: 3rem;
  }

  .program-content {
    padding: 1.5rem;
  }

  .detail-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 1rem 0;
  }

  .detail-value {
    font-weight: 500;
  }

  .support-categories {
    gap: 1.5rem;
  }

  .support-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-item {
    padding: 1.25rem 1rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}

/* Small Mobile (320px - 480px) */
@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .services-hero,
  .main-services,
  .course-programs,
  .support-services,
  .services-cta {
    padding: 2rem 0;
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-card h3 {
    font-size: 1.2rem;
  }

  .service-features li {
    font-size: 0.9rem;
  }

  .program-header {
    padding: 1.5rem;
  }

  .program-content {
    padding: 1.25rem;
  }

  .program-info h3 {
    font-size: 1.1rem;
  }

  .program-subtitle {
    font-size: 0.85rem;
  }

  .support-category h4 {
    font-size: 1.1rem;
  }

  .support-category li {
    font-size: 0.9rem;
    padding: 0.4rem 0;
  }

  .stat-item {
    padding: 1rem 0.75rem;
  }

  .stat-number {
    font-size: 1.6rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }
}

/* Ultra-wide screens (1600px+) */
@media (min-width: 1600px) {
  .container {
    max-width: 1600px;
  }

  .services-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }

  .programs-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
}

/* Landscape Mobile */
@media (max-width: 767px) and (orientation: landscape) {
  .services-hero {
    padding: 1.5rem 0;
  }

  .main-services,
  .course-programs,
  .support-services {
    padding: 2rem 0;
  }

  .program-header {
    flex-direction: row;
    text-align: left;
    padding: 1.5rem;
  }

  .program-icon {
    font-size: 2.5rem;
  }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .service-icon,
  .program-icon,
  .category-icon {
    image-rendering: crisp-edges;
  }
}

/* Print styles */
@media print {
  .services-hero {
    background: none !important;
  }

  .service-card,
  .program-card,
  .stat-item {
    box-shadow: none !important;
    border: 1px solid var(--medium-gray) !important;
  }

  .btn-primary,
  .btn-secondary {
    display: none;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .program-card,
  .btn-primary,
  .btn-secondary {
    transition: none;
  }

  .service-card:hover,
  .program-card:hover {
    transform: none;
  }
}

/* Focus states for accessibility */
.service-card:focus,
.program-card:focus {
  outline: 3px solid var(--accent-color);
  outline-offset: 2px;
}

.btn-primary:focus,
.btn-secondary:focus {
  outline: 3px solid var(--accent-color);
  outline-offset: 2px;
}

/* Dark mode support (if implemented) */
@media (prefers-color-scheme: dark) {
  .service-card,
  .program-card,
  .stat-item {
    background: #1f2937;
    color: #f9fafb;
  }

  .program-header {
    background: linear-gradient(135deg, #1e40af, #1d4ed8);
  }
}
</style>
