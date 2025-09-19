<template>
  <div class="learn-more">
    <!-- Hero Section -->
    <section
      class="learn-hero"
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
          Learn More About Our Approach
        </h1>
        <p
          class="page-subtitle"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 400 }"
        >
          Discover why partnering with Parth Knowledge Network Pvt. Ltd. as an Authorized Learning
          Center (ALC) for Maharashtra Knowledge Corporation Limited (MKCL) is a powerful
          opportunity to empower communities through IT education and vocational training. As a
          leading Training Partner (TP), Parth offers unmatched support and resources to help you
          succeed in delivering MKCL’s flagship programs, such as the MS-CIT course.
        </p>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Why Choose Parth as Your Training Partner?
        </h2>

        <div class="process-grid">
          <div
            class="process-step"
            v-for="(step, index) in processSteps"
            :key="index"
            v-motion
            :initial="{ x: -50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 600, delay: index * 200 }"
            :whileHover="{ scale: 1.05, y: -5 }"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <div class="benefits-content">
          <div class="benefits-text">
            <h2
              v-motion
              :initial="{ x: -50, opacity: 0 }"
              :visible-once="{ x: 0, opacity: 1 }"
              :transition="{ duration: 600 }"
            >
              Benefits of Becoming an ALC with Parth
            </h2>

            <ul class="benefits-list">
              <li
                v-for="(benefit, index) in benefits"
                :key="index"
                v-motion
                :initial="{ x: -30, opacity: 0 }"
                :visible-once="{ x: 0, opacity: 1 }"
                :transition="{ duration: 500, delay: index * 150 }"
              >
                <span class="benefit-icon">{{ benefit.icon }}</span>
                <div>
                  <strong>{{ benefit.title }}</strong>
                  <p>{{ benefit.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="benefits-visual"
            v-motion
            :initial="{ x: 50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800 }"
          >
            <div class="visual-element element-1"></div>
            <div class="visual-element element-2"></div>
            <div class="visual-element element-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div
          class="cta-content"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 800 }"
        >
          <h2>Ready to Get Started?</h2>
          <p>Let's create something amazing together</p>
          <div class="cta-buttons">
            <button
              class="btn-primary"
              v-motion
              :whileHover="{ scale: 1.05, y: -2 }"
              :whileTap="{ scale: 0.95 }"
              @click="$router.push('/contact')"
            >
              Contact Us
            </button>
            <button
              class="btn-secondary"
              v-motion
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
              @click="$router.push('/')"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const processSteps = [
  {
    title: 'Vast Network Reach',
    description:
      'With over 2,500 centers across Maharashtra, Rajasthan, and Gujarat, Parth’s extensive network ensures your ALC can reach diverse learners, from urban hubs to rural and tribal areas, delivering impactful IT literacy programs.',
  },
  {
    title: 'Award-Winning Excellence',
    description:
      'Recognized as MKCL’s Best & Most Performing Training Partner, Parth guarantees reliable, high-quality support, helping your ALC meet MKCL’s standards and deliver exceptional training experiences.',
  },
  {
    title: 'Comprehensive Operational Support',
    description:
      'Parth equips ALCs with tools like OnCeT certifications for coordinators, SOLAR login access for streamlined operations, and marketing resources, including social media campaigns and local events, to boost learner enrollment.',
  },
  {
    title: 'Empower Through Skills',
    description:
      'Offer industry-relevant courses like MS-CIT and KLiC, enhanced by Parth’s focus on career profiling and skill development, attracting learners eager to improve their employability.',
  },
]

const benefits = [
  {
    icon: '🎯',
    title: 'Access to MKCL’s Proven Curriculum',
    description:
      'Deliver trusted programs like MS-CIT, which has empowered over 15 million learners since 2001.',
  },
  {
    icon: '📈',
    title: 'Scalable Growth Opportunities',
    description:
      'Leverage Parth’s franchisee model (up to 10 ALCs) to expand your reach while maintaining quality.',
  },
  {
    icon: '🔍',
    title: 'Community Impact: Bridging the Digital Divide',
    description:
      'Bridge the digital divide by bringing IT education to underserved areas, fostering local empowerment.',
  },
  {
    icon: '🛡️',
    title: 'Ongoing Support & Training',
    description: 'Receive guidance on setup, compliance, and marketing to ensure your ALC thrives.',
  },
]
</script>

<style scoped>
.learn-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-white) 0%, var(--off-white) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.page-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-dark);
}

/* Process Section */
.process-section {
  padding: 5rem 0;
  background: var(--primary-white);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--off-white);
  border-radius: var(--radius-lg);
  cursor: pointer;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.step-content p {
  color: var(--text-gray);
  line-height: 1.6;
}

/* Technologies Section */
.tech-section {
  padding: 5rem 0;
  background: var(--off-white);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-card {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-light);
  cursor: pointer;
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tech-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.tech-card p {
  color: var(--text-gray);
  line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
  padding: 5rem 0;
  background: var(--primary-white);
}

.benefits-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.benefits-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-dark);
}

.benefits-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefits-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.benefit-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefits-list strong {
  color: var(--text-dark);
  display: block;
  margin-bottom: 0.25rem;
}

.benefits-list p {
  color: var(--text-gray);
  margin: 0;
}

.benefits-visual {
  position: relative;
  height: 400px;
}

.visual-element {
  position: absolute;
  border-radius: var(--radius-lg);
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
  top: 0;
  right: 0;
  animation-delay: 0s;
}

.element-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981, #059669);
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  animation-delay: 2s;
}

.element-3 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  bottom: 0;
  right: 30%;
  animation-delay: 4s;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--off-white) 0%, var(--primary-white) 100%);
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.cta-content p {
  font-size: 1.2rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
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
}

.btn-secondary:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(2deg);
  }
  66% {
    transform: translateY(10px) rotate(-2deg);
  }
}

@media (max-width: 768px) {
  .benefits-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .benefits-visual {
    height: 200px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 200px;
  }
}
</style>
