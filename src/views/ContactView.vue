<template>
  <div class="contact">
    <!-- Hero Section -->
    <section
      class="contact-hero"
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
          Contact Us
        </h1>
        <p
          class="page-subtitle"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 400 }"
        >
          Ready to start your journey with Parth Knowledge Network? Get in touch with our team.
        </p>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-content">
          <!-- Contact Form -->
          <div
            class="contact-form-section"
            v-motion
            :initial="{ x: -50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800 }"
          >
            <div class="form-container">
              <h2>Send us a Message</h2>
              <form class="contact-form" @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div class="form-group">
                  <label for="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    v-model="form.organization"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <select id="subject" v-model="form.subject" required>
                    <option value="">Select a subject</option>
                    <option value="new-center">New Center Registration</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="submit-btn"
                  v-motion
                  :whileHover="{ scale: 1.02, y: -2 }"
                  :whileTap="{ scale: 0.98 }"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Information -->
          <div
            class="contact-info-section"
            v-motion
            :initial="{ x: 50, opacity: 0 }"
            :visible-once="{ x: 0, opacity: 1 }"
            :transition="{ duration: 800, delay: 200 }"
          >
            <h2>Get in Touch</h2>

            <div class="contact-methods">
              <div
                class="contact-item"
                v-for="(item, index) in contactMethods"
                :key="index"
                v-motion
                :initial="{ y: 30, opacity: 0 }"
                :visible-once="{ y: 0, opacity: 1 }"
                :transition="{ duration: 500, delay: 300 + index * 100 }"
              >
                <div class="contact-icon">{{ item.icon }}</div>
                <div class="contact-details">
                  <h3>{{ item.title }}</h3>
                  <p v-for="(line, i) in item.details" :key="i">{{ line }}</p>
                </div>
              </div>
            </div>

            <div class="business-hours">
              <h3>Business Hours</h3>
              <div class="hours-list">
                <div class="hours-item">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div class="hours-item">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div class="hours-item">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div class="response-promise">
              <h3>Our Promise</h3>
              <p>We respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Optional) -->
    <section class="map-section">
      <div class="container">
        <h2
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600 }"
        >
          Find Our Office
        </h2>
        <div
          class="map-container"
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible-once="{ y: 0, opacity: 1 }"
          :transition="{ duration: 800, delay: 200 }"
        >
          <div class="map-placeholder">
            <div class="map-content">
              <h3>Parth Knowledge Network Pvt. Ltd.</h3>
              <p>Plot No. 20, Sector 17, Airoli</p>
              <p>Navi Mumbai, Maharashtra - 400708</p>
              <button class="directions-btn" @click="openDirections">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  organization: '',
  subject: '',
  message: '',
})

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    details: ['connect@parthinfo.com', 'support@parthinfo.com'],
  },
  {
    icon: '📱',
    title: 'Phone',
    details: ['+91 9820313212', '+91 7738146959', '+91 8384858685'],
  },
  {
    icon: '📍',
    title: 'Address',
    details: ['Plot No. 20, Sector 17, Airoli', 'Navi Mumbai, Maharashtra 400708'],
  },
]

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form)

    // Reset form after successful submission
    form.name = ''
    form.email = ''
    form.phone = ''
    form.organization = ''
    form.subject = ''
    form.message = ''

    alert('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const openDirections = () => {
  window.open(`https://maps.google.com/maps?q=Parth+Knowledge+Network+Pvt.+Ltd`, '_blank')
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
  padding-top: 5rem;
}

/* Hero Section */
.contact-hero {
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
}

/* Main Contact Section */
.contact-main {
  padding: 4rem 0;
  background: var(--primary-white);
}

.contact-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

/* Contact Form */
.form-container {
  background: var(--off-white);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-light);
}

.form-container h2 {
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid var(--medium-gray);
  border-radius: var(--radius);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--primary-white);
  min-height: 44px; /* Touch-friendly minimum */
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
  align-self: flex-start;
}

.submit-btn:hover:not(:disabled) {
  background: #1d4ed8;
  box-shadow: var(--shadow-medium);
}

.submit-btn:disabled {
  background: var(--text-gray);
  cursor: not-allowed;
}

/* Contact Information */
.contact-info-section {
  background: var(--primary-white);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-light);
  height: fit-content;
}

.contact-info-section h2 {
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--off-white);
  border-radius: var(--radius);
}

.contact-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-details h3 {
  color: var(--text-dark);
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.contact-details p {
  color: var(--text-gray);
  margin: 0.25rem 0;
  font-size: 0.95rem;
}

.business-hours,
.response-promise {
  margin-bottom: 2rem;
}

.business-hours h3,
.response-promise h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.hours-list {
  background: var(--off-white);
  padding: 1.5rem;
  border-radius: var(--radius);
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light-gray);
}

.hours-item:last-child {
  border-bottom: none;
}

.hours-item span:first-child {
  font-weight: 500;
  color: var(--text-dark);
}

.hours-item span:last-child {
  color: var(--text-gray);
}

.response-promise p {
  color: var(--text-gray);
  background: var(--off-white);
  padding: 1rem;
  border-radius: var(--radius);
  border-left: 4px solid var(--accent-color);
  margin: 0;
}

/* Map Section */
.map-section {
  padding: 4rem 0;
  background: var(--off-white);
}

.map-section h2 {
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.map-container {
  max-width: 800px;
  margin: 0 auto;
}

.map-placeholder {
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  text-align: center;
  padding: 2rem;
}

.map-content h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.map-content p {
  color: var(--text-gray);
  margin: 0.5rem 0;
}

.directions-btn {
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  min-height: 44px;
}

.directions-btn:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

/* Responsive Design */

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
    padding: 0 3rem;
  }

  .contact-content {
    gap: 5rem;
  }

  .form-container,
  .contact-info-section {
    padding: 3rem;
  }
}

/* Desktop (1024px - 1439px) */
@media (max-width: 1439px) and (min-width: 1024px) {
  .contact-content {
    gap: 3rem;
  }

  .form-container,
  .contact-info-section {
    padding: 2rem;
  }
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-hero {
    padding: 2rem 0;
  }

  .contact-main {
    padding: 3rem 0;
  }

  .map-section {
    padding: 3rem 0;
  }

  .form-container,
  .contact-info-section {
    padding: 2rem;
  }

  .contact-methods {
    gap: 1.5rem;
  }

  .contact-item {
    padding: 1.25rem;
  }
}

/* Mobile (481px - 767px) */
@media (max-width: 767px) {
  .container {
    padding: 0 1rem;
  }

  .contact-hero {
    padding: 1.5rem 0;
  }

  .contact-main {
    padding: 2rem 0;
  }

  .map-section {
    padding: 2rem 0;
  }

  .form-container,
  .contact-info-section {
    padding: 1.5rem;
    border-radius: var(--radius);
  }

  .contact-form {
    gap: 1.25rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.875rem;
    font-size: 1rem;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .contact-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .hours-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.75rem 0;
  }

  .hours-item span:last-child {
    font-size: 0.9rem;
  }
}

/* Small Mobile (320px - 480px) */
@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .form-container,
  .contact-info-section {
    padding: 1rem;
  }

  .contact-form {
    gap: 1rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem;
  }

  .form-group textarea {
    min-height: 100px;
  }

  .contact-item {
    padding: 0.875rem;
  }

  .contact-icon {
    font-size: 2rem;
  }

  .business-hours,
  .response-promise {
    margin-bottom: 1.5rem;
  }

  .hours-list,
  .response-promise p {
    padding: 1rem;
  }

  .map-placeholder {
    min-height: 250px;
  }

  .map-content {
    padding: 1.5rem;
  }
}

/* Ultra-wide screens (1600px+) */
@media (min-width: 1600px) {
  .container {
    max-width: 1600px;
  }

  .contact-content {
    grid-template-columns: 1.3fr 0.7fr;
    gap: 6rem;
  }
}

/* Landscape Mobile */
@media (max-width: 767px) and (orientation: landscape) {
  .contact-hero {
    padding: 1rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .contact-icon {
    image-rendering: crisp-edges;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .submit-btn,
  .directions-btn,
  .form-group input,
  .form-group select,
  .form-group textarea {
    transition: none;
  }
}
</style>
