<template>
  <div class="about">
    <!-- Hero Section -->
    <section
      class="about-hero"
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
          About Parth Knowledge Network
        </h1>
        <p
          class="page-subtitle"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 400 }"
        >
          Empowering communities through digital literacy and skill development as Maharashtra's
          leading MKCL Training Partner
        </p>
      </div>
    </section>

    <!-- Company Overview Section -->
    <section class="company-overview">
      <div class="container">
        <div class="overview-content">
          <div
            class="overview-text"
            v-motion
            :initial="{ x: -50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800 }"
          >
            <h2>Who We Are</h2>
            <p class="lead-text">
              Parth Knowledge Network Pvt. Ltd. is a premier Training Partner (TP) for Maharashtra
              Knowledge Corporation Limited (MKCL), dedicated to bridging the digital divide across
              India.
            </p>
            <p>
              Since our inception, we have been committed to providing high-quality IT education and
              vocational training to diverse communities. Our mission extends beyond traditional
              education – we're building a digitally empowered society where technology becomes an
              enabler for personal and professional growth.
            </p>
            <p>
              As one of MKCL's most trusted partners, we operate over 2,500 Authorized Learning
              Centers (ALCs) across Maharashtra, Rajasthan, and Gujarat, making us one of the
              largest educational networks in the region.
            </p>
          </div>

          <div
            class="overview-stats"
            v-motion
            :initial="{ x: 50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800, delay: 200 }"
          >
            <div class="stats-grid">
              <div
                class="stat-card"
                v-for="(stat, index) in companyStats"
                :key="index"
                v-motion
                :initial="{ scale: 0.8, opacity: 0 }"
                :visible-once="{ scale: 1, opacity: 1 }"
                :transition="{ duration: 500, delay: 400 + index * 100 }"
              >
                <div class="stat-icon">{{ stat.icon }}</div>
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Vision Values -->
    <section class="mission-vision-values">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Our Foundation
        </h2>

        <div class="mvv-grid">
          <div
            class="mvv-card"
            v-for="(item, index) in missionVisionValues"
            :key="index"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible-once="{ y: 0, opacity: 1 }"
            :transition="{ duration: 600, delay: index * 200 }"
            :whileHover="{ y: -5, scale: 1.02 }"
          >
            <div class="mvv-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul class="mvv-points">
              <li v-for="(point, i) in item.points" :key="i">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Journey / Timeline -->
    <section class="our-journey">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Our Journey
        </h2>

        <div class="timeline">
          <div
            class="timeline-item"
            v-for="(milestone, index) in journeyMilestones"
            :key="index"
            v-motion
            :initial="{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 600, delay: index * 200 }"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ milestone.year }}</div>
              <h4>{{ milestone.title }}</h4>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="what-we-offer">
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

        <div class="offerings-grid">
          <div
            class="offering-card"
            v-for="(offering, index) in offerings"
            :key="index"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible-once="{ y: 0, opacity: 1 }"
            :transition="{ duration: 600, delay: index * 150 }"
          >
            <div class="offering-header">
              <div class="offering-icon">{{ offering.icon }}</div>
              <h3>{{ offering.title }}</h3>
            </div>
            <p class="offering-description">{{ offering.description }}</p>
            <div class="offering-features">
              <div class="feature-tag" v-for="(feature, i) in offering.features" :key="i">
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="leadership-team">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Leadership Team
        </h2>

        <div class="team-grid">
          <div
            class="team-member"
            v-for="(member, index) in teamMembers"
            :key="index"
            v-motion
            :initial="{ scale: 0.9, opacity: 0 }"
            :visible-once="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 500, delay: index * 100 }"
            :whileHover="{ y: -10 }"
          >
            <div class="member-avatar">
              <div class="avatar-placeholder">{{ member.initials }}</div>
            </div>
            <div class="member-info">
              <h4>{{ member.name }}</h4>
              <p class="member-position">{{ member.position }}</p>
              <p class="member-description">{{ member.description }}</p>
              <div class="member-expertise">
                <span class="expertise-tag" v-for="(skill, i) in member.expertise" :key="i">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us">
      <div class="container">
        <h2
          class="section-title"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Why Choose Parth Knowledge Network
        </h2>

        <div class="advantages-grid">
          <div
            class="advantage-item"
            v-for="(advantage, index) in advantages"
            :key="index"
            v-motion
            :initial="{ x: -30, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 500, delay: index * 100 }"
          >
            <div class="advantage-icon">{{ advantage.icon }}</div>
            <div class="advantage-content">
              <h4>{{ advantage.title }}</h4>
              <p>{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta">
      <div class="container">
        <div
          class="cta-content"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 800 }"
        >
          <h2>Ready to Partner With Us?</h2>
          <p>
            Join our network of successful training centers and make a meaningful impact in your
            community.
          </p>
          <div class="cta-buttons">
            <button
              class="btn-primary"
              v-motion
              :whileHover="{ scale: 1.05, y: -2 }"
              :whileTap="{ scale: 0.95 }"
              @click="$router.push('/get-started')"
            >
              Start Your Journey
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
const companyStats = [
  {
    icon: '🏢',
    number: '2500+',
    label: 'Learning Centers',
  },
  {
    icon: '🎓',
    number: '15M+',
    label: 'Students Trained',
  },
  {
    icon: '🌍',
    number: '3',
    label: 'States Covered',
  },
  {
    icon: '🏆',
    number: '#1',
    label: 'MKCL Partner',
  },
]

const missionVisionValues = [
  {
    icon: '🎯',
    title: 'Our Mission',
    description:
      'To democratize digital education and make technology accessible to every individual, regardless of their background or location.',
    points: [
      'Bridge the digital divide in rural and urban communities',
      'Provide world-class IT education and vocational training',
      'Create sustainable livelihood opportunities',
      'Foster digital literacy across all age groups',
    ],
  },
  {
    icon: '👁️',
    title: 'Our Vision',
    description:
      "To be the leading catalyst in India's digital transformation by creating a digitally empowered society.",
    points: [
      'Establish learning centers in every district',
      'Train 50 million learners by 2030',
      'Lead innovation in educational technology',
      'Build the largest skill development network',
    ],
  },
  {
    icon: '💎',
    title: 'Our Values',
    description:
      'Our core values guide everything we do and shape our approach to education and community development.',
    points: [
      'Excellence in education delivery',
      'Integrity in all our dealings',
      'Innovation in teaching methodologies',
      'Inclusivity for all learners',
    ],
  },
]

const journeyMilestones = [
  {
    year: '2015',
    title: 'Foundation',
    description:
      'Parth Knowledge Network was established with a vision to bridge the digital divide in Maharashtra.',
  },
  {
    year: '2017',
    title: 'MKCL Partnership',
    description:
      'Became an authorized Training Partner for MKCL, launching our first batch of learning centers.',
  },
  {
    year: '2019',
    title: 'Multi-State Expansion',
    description:
      'Extended operations to Rajasthan and Gujarat, establishing our presence across three states.',
  },
  {
    year: '2021',
    title: 'Best Partner Award',
    description:
      'Recognized as MKCL\'s "Best & Most Performing Training Partner" for outstanding performance.',
  },
  {
    year: '2023',
    title: '2500+ Centers',
    description:
      "Crossed the milestone of 2,500 active learning centers, becoming one of India's largest networks.",
  },
  {
    year: '2024',
    title: 'Digital Innovation',
    description:
      'Launched advanced digital learning platforms and introduced AI-powered learning solutions.',
  },
]

const offerings = [
  {
    icon: '💻',
    title: 'MS-CIT Program',
    description:
      'Maharashtra State Certificate in Information Technology - the flagship digital literacy program.',
    features: [
      'Basic Computer Skills',
      'Internet Usage',
      'Digital Services',
      'Government recognized',
    ],
  },
  {
    icon: '🎯',
    title: 'KLiC Courses',
    description:
      'Konark Learning in Computer - advanced skill development programs for professionals.',
    features: ['Advanced Computing', 'Industry Skills', 'Certification', 'Career Focused'],
  },
  {
    icon: '🛠️',
    title: 'Vocational Training',
    description: 'Comprehensive skill development programs aligned with industry requirements.',
    features: ['Technical Skills', 'Soft Skills', 'Industry Connect', 'Employment Support'],
  },
  {
    icon: '📚',
    title: 'Custom Programs',
    description: 'Tailored training solutions for organizations and specific community needs.',
    features: [
      'Corporate Training',
      'Government Projects',
      'NGO Partnerships',
      'Community Programs',
    ],
  },
]

const teamMembers = [
  {
    name: 'Leadership Team',
    position: 'Executive Management',
    initials: 'LT',
    description:
      'Our experienced leadership team brings decades of expertise in education, technology, and business development.',
    expertise: [
      'Strategic Planning',
      'Operations Management',
      'Educational Technology',
      'Partnership Development',
    ],
  },
  {
    name: 'Academic Team',
    position: 'Educational Excellence',
    initials: 'AT',
    description:
      'Dedicated academic professionals focused on curriculum development and quality assurance.',
    expertise: ['Curriculum Design', 'Quality Assurance', 'Faculty Training', 'Assessment Systems'],
  },
  {
    name: 'Technology Team',
    position: 'Innovation & Support',
    initials: 'TT',
    description:
      'Technical experts ensuring robust infrastructure and innovative learning solutions.',
    expertise: [
      'Platform Development',
      'Technical Support',
      'Digital Innovation',
      'System Integration',
    ],
  },
]

const advantages = [
  {
    icon: '🏆',
    title: 'Proven Track Record',
    description:
      'Award-winning performance with over 15 million successful learners and recognition from MKCL.',
  },
  {
    icon: '🌐',
    title: 'Extensive Network',
    description: 'Largest network of 2500+ centers across Maharashtra, Rajasthan, and Gujarat.',
  },
  {
    icon: '👥',
    title: 'Expert Support',
    description:
      'Comprehensive support from setup to operations, including training, marketing, and technical assistance.',
  },
  {
    icon: '📈',
    title: 'Growth Opportunities',
    description:
      'Multiple revenue streams and growth opportunities through diverse program offerings.',
  },
  {
    icon: '🔧',
    title: 'Complete Solutions',
    description:
      'End-to-end solutions including infrastructure setup, curriculum, certification, and ongoing support.',
  },
  {
    icon: '🤝',
    title: 'Community Impact',
    description:
      'Make a meaningful difference in your community by providing essential digital skills and education.',
  },
]
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding-top: 5rem;
}

/* Hero Section */
.about-hero {
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

/* Company Overview */
.company-overview {
  padding: 5rem 0;
  background: var(--primary-white);
}

.overview-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

.overview-text h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-dark);
}

.lead-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.overview-text p {
  font-size: 1.1rem;
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.stat-card {
  background: var(--off-white);
  padding: 2rem 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
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

/* Mission Vision Values */
.mission-vision-values {
  padding: 5rem 0;
  background: var(--off-white);
}

.mvv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.mvv-card {
  background: var(--primary-white);
  padding: 2.5rem 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
}

.mvv-card:hover {
  box-shadow: var(--shadow-large);
}

.mvv-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.mvv-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.mvv-card p {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.mvv-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mvv-points li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-gray);
  font-size: 0.95rem;
}

.mvv-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

/* Journey Timeline */
.our-journey {
  padding: 5rem 0;
  background: var(--primary-white);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-color), #60a5fa);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: var(--accent-color);
  border: 4px solid var(--primary-white);
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--accent-color);
}

.timeline-content {
  background: var(--off-white);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-light);
}

.timeline-year {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.timeline-content p {
  color: var(--text-gray);
  line-height: 1.6;
  margin: 0;
}

/* What We Offer */
.what-we-offer {
  padding: 5rem 0;
  background: var(--off-white);
}

.offerings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.offering-card {
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
}

.offering-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-large);
}

.offering-header {
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
  color: white;
  padding: 2rem;
  text-align: center;
}

.offering-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.offering-header h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.offering-description {
  padding: 2rem;
  color: var(--text-gray);
  line-height: 1.6;
  margin: 0;
}

.offering-features {
  padding: 0 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  background: var(--off-white);
  color: var(--text-dark);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Leadership Team */
.leadership-team {
  padding: 5rem 0;
  background: var(--primary-white);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.team-member {
  background: var(--off-white);
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-light);
  cursor: pointer;
  transition: all 0.3s ease;
}

.member-avatar {
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-color), #60a5fa);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 auto;
}

.member-info h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.member-position {
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.member-description {
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.expertise-tag {
  background: var(--primary-white);
  color: var(--text-dark);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Why Choose Us */
.why-choose-us {
  padding: 5rem 0;
  background: var(--off-white);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.advantage-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-medium);
}

.advantage-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.advantage-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.advantage-content p {
  color: var(--text-gray);
  line-height: 1.6;
  margin: 0;
}

/* CTA Section */
.about-cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-white) 0%, var(--off-white) 100%);
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

  .overview-content {
    gap: 5rem;
  }

  .mvv-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .offerings-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

/* Desktop (1024px - 1439px) */
@media (max-width: 1439px) and (min-width: 1024px) {
  .overview-content {
    gap: 3rem;
  }

  .mvv-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .offerings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .container {
    padding: 0 1.5rem;
  }

  .about-hero,
  .company-overview,
  .mission-vision-values,
  .our-journey,
  .what-we-offer,
  .leadership-team,
  .why-choose-us,
  .about-cta {
    padding: 3rem 0;
  }

  .overview-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .mvv-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .offerings-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -2rem;
  }
}

/* Mobile (481px - 767px) */
@media (max-width: 767px) {
  .container {
    padding: 0 1rem;
  }

  .about-hero {
    padding: 2rem 0;
  }

  .company-overview,
  .mission-vision-values,
  .our-journey,
  .what-we-offer,
  .leadership-team,
  .why-choose-us,
  .about-cta {
    padding: 2.5rem 0;
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem 1rem;
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .mvv-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mvv-card {
    padding: 2rem 1.5rem;
  }

  .mvv-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline::before {
    left: 0.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
    width: 12px;
    height: 12px;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .offerings-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .offering-header {
    padding: 1.5rem;
  }

  .offering-icon {
    font-size: 2.5rem;
  }

  .offering-description {
    padding: 1.5rem;
  }

  .offering-features {
    padding: 0 1.5rem 1.5rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .team-member {
    padding: 1.5rem;
  }

  .avatar-placeholder {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .advantage-item {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .advantage-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
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

  .about-hero,
  .company-overview,
  .mission-vision-values,
  .our-journey,
  .what-we-offer,
  .leadership-team,
  .why-choose-us,
  .about-cta {
    padding: 2rem 0;
  }

  .stats-grid {
    gap: 0.75rem;
  }

  .stat-card {
    padding: 1.25rem 0.75rem;
  }

  .stat-icon {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .mvv-card {
    padding: 1.5rem;
  }

  .mvv-icon {
    font-size: 2rem;
  }

  .timeline-content {
    padding: 1.25rem;
  }

  .offering-header {
    padding: 1.25rem;
  }

  .offering-icon {
    font-size: 2rem;
  }

  .offering-description {
    padding: 1.25rem;
  }

  .offering-features {
    padding: 0 1.25rem 1.25rem;
  }

  .feature-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .team-member {
    padding: 1.25rem;
  }

  .avatar-placeholder {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  .expertise-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }

  .advantage-item {
    padding: 1.25rem;
  }
}

/* Ultra-wide screens (1600px+) */
@media (min-width: 1600px) {
  .container {
    max-width: 1600px;
  }

  .overview-content {
    gap: 6rem;
  }

  .mvv-grid {
    gap: 4rem;
  }

  .offerings-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
}

/* Landscape Mobile */
@media (max-width: 767px) and (orientation: landscape) {
  .about-hero {
    padding: 1.5rem 0;
  }

  .company-overview,
  .mission-vision-values,
  .our-journey,
  .what-we-offer,
  .leadership-team,
  .why-choose-us {
    padding: 2rem 0;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .mvv-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .stat-icon,
  .mvv-icon,
  .offering-icon,
  .advantage-icon {
    image-rendering: crisp-edges;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .stat-card,
  .mvv-card,
  .offering-card,
  .team-member,
  .advantage-item,
  .btn-primary,
  .btn-secondary {
    transition: none;
  }

  .stat-card:hover,
  .offering-card:hover,
  .advantage-item:hover {
    transform: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .stat-card,
  .mvv-card,
  .timeline-content,
  .offering-card,
  .team-member,
  .advantage-item {
    border: 2px solid var(--text-dark);
  }

  .btn-primary,
  .btn-secondary {
    border: 2px solid currentColor;
  }
}

/* Print styles */
@media print {
  .about {
    padding-top: 0;
  }

  .about-hero {
    background: none;
    padding: 1rem 0;
  }

  .company-overview,
  .mission-vision-values,
  .our-journey,
  .what-we-offer,
  .leadership-team,
  .why-choose-us,
  .about-cta {
    padding: 1.5rem 0;
  }

  .stat-card,
  .mvv-card,
  .timeline-content,
  .offering-card,
  .team-member,
  .advantage-item {
    box-shadow: none;
    border: 1px solid var(--medium-gray);
  }

  .btn-primary,
  .btn-secondary {
    display: none;
  }

  .timeline::before {
    background: var(--text-dark);
  }

  .timeline-marker {
    background: var(--text-dark);
    box-shadow: none;
  }
}

/* Focus states for accessibility */
.stat-card:focus,
.mvv-card:focus,
.offering-card:focus,
.team-member:focus,
.advantage-item:focus {
  outline: 3px solid var(--accent-color);
  outline-offset: 2px;
}

.btn-primary:focus,
.btn-secondary:focus {
  outline: 3px solid var(--accent-color);
  outline-offset: 2px;
}
</style>
