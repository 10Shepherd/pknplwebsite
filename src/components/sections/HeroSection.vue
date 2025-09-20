<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1
          class="hero-title"
          v-motion
          :initial="{ y: 20, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 1100, delay: 200 }"
        >
          Parth Knowledge Network Pvt LTD
          <span class="hero-gradient">MKCL Training Partner</span>
        </h1>

        <p
          class="hero-description"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 400 }"
        >
          TP means the Empanelled Training Provider, as described and prescribed, selected to
          establish and run the ALCs or the Training Provider chosen by MKCL as per its norms from
          time to time.
        </p>

        <div
          class="hero-buttons"
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1 }"
          :transition="{ duration: 600, delay: 600 }"
        >
          <button
            class="btn-primary"
            v-motion
            :whileHover="{ scale: 1.05, y: -2 }"
            :whileTap="{ scale: 0.95 }"
            @click="$router.push('/get-started')"
          >
            Get Started
          </button>

          <button
            class="btn-secondary"
            v-motion
            :whileHover="{ scale: 1.05 }"
            :whileTap="{ scale: 0.95 }"
            @click="$router.push('/learn-more')"
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        class="hero-visual"
        v-motion
        :initial="{ x: 100, opacity: 0 }"
        :enter="{ x: 0, opacity: 1 }"
        :transition="{ duration: 1000, delay: 300 }"
      >
        <div class="floating-card card-1">
          <div class="card-content">
            <div class="card-icon design-icon"></div>
            <h3>Design</h3>
            <p>Creative solutions</p>
          </div>
        </div>

        <div class="floating-card card-2">
          <div class="card-content">
            <div class="card-icon develop-icon"></div>
            <h3>Develop</h3>
            <p>Technical excellence</p>
          </div>
        </div>

        <div class="floating-card card-3">
          <div class="card-content">
            <div class="card-icon deploy-icon"></div>
            <h3>Deploy</h3>
            <p>Seamless delivery</p>
          </div>
        </div>

        <!-- Background decorative elements -->
        <div class="bg-decoration decoration-1"></div>
        <div class="bg-decoration decoration-2"></div>
        <div class="bg-decoration decoration-3"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  background: linear-gradient(135deg, var(--primary-white) 0%, var(--off-white) 100%);
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.hero-gradient {
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-top: 0.5rem;
}

.hero-description {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
  min-height: 50px;
  min-width: 140px;
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
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
  min-width: 140px;
}

.btn-secondary:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  background: rgba(37, 99, 235, 0.05);
}

.hero-visual {
  position: relative;
  height: 500px;
  width: 100%;
}

.floating-card {
  position: absolute;
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-large);
  animation: float 6s ease-in-out infinite;
  z-index: 3;
  min-width: 140px;
  backdrop-filter: blur(10px);
}

.card-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 45%;
  left: 0;
  animation-delay: 2s;
}

.card-3 {
  bottom: 15%;
  right: 25%;
  animation-delay: 4s;
}

.card-content {
  text-align: center;
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.design-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.develop-icon {
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
}

.deploy-icon {
  background: linear-gradient(135deg, #10b981, #059669);
}

.card-content h3 {
  color: var(--text-dark);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.card-content p {
  color: var(--text-gray);
  font-size: 0.9rem;
  margin: 0;
}

/* Background decorative elements */
.bg-decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
}

.decoration-1 {
  width: 200px;
  height: 200px;
  background: var(--accent-color);
  top: 20%;
  right: -50px;
  animation: float 8s ease-in-out infinite;
}

.decoration-2 {
  width: 150px;
  height: 150px;
  background: #10b981;
  bottom: 20%;
  left: -40px;
  animation: float 10s ease-in-out infinite reverse;
}

.decoration-3 {
  width: 100px;
  height: 100px;
  background: #f59e0b;
  top: 60%;
  right: 20%;
  animation: float 7s ease-in-out infinite;
  animation-delay: 3s;
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

/* Responsive Design */

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .hero-container {
    max-width: 1400px;
    padding: 0 3rem;
    gap: 5rem;
  }

  .hero-visual {
    height: 600px;
  }

  .floating-card {
    padding: 2rem;
    min-width: 160px;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }

  .decoration-1 {
    width: 250px;
    height: 250px;
  }

  .decoration-2 {
    width: 200px;
    height: 200px;
  }
}

/* Desktop (1024px - 1439px) */
@media (max-width: 1439px) and (min-width: 1024px) {
  .hero-container {
    gap: 3rem;
  }

  .hero-visual {
    height: 450px;
  }

  .floating-card {
    min-width: 130px;
  }
}

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .hero {
    min-height: 80vh;
    padding-top: 4rem;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 1.5rem;
  }

  .hero-content {
    max-width: 700px;
    margin: 0 auto;
  }

  .hero-visual {
    height: 350px;
    max-width: 500px;
    margin: 0 auto;
  }

  .floating-card {
    padding: 1.25rem;
    min-width: 120px;
  }

  .card-1 {
    top: 5%;
    right: 15%;
  }

  .card-2 {
    top: 50%;
    left: 10%;
  }

  .card-3 {
    bottom: 10%;
    right: 30%;
  }

  .hero-buttons {
    justify-content: center;
  }

  .decoration-1,
  .decoration-2,
  .decoration-3 {
    display: none;
  }
}

/* Mobile (481px - 767px) */
@media (max-width: 767px) {
  .hero {
    min-height: 70vh;
    padding-top: 3rem;
  }

  .hero-container {
    padding: 0 1rem;
    gap: 2rem;
  }

  .hero-title {
    margin-bottom: 1rem;
  }

  .hero-description {
    margin-bottom: 1.5rem;
  }

  .hero-buttons {
    gap: 0.75rem;
  }

  .btn-primary,
  .btn-secondary {
    flex: 1;
    min-width: 120px;
    padding: 0.875rem 1.5rem;
  }

  .hero-visual {
    height: 280px;
  }

  .floating-card {
    padding: 1rem;
    min-width: 100px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .card-content h3 {
    font-size: 1rem;
  }

  .card-content p {
    font-size: 0.8rem;
  }

  .card-1 {
    top: 0;
    right: 10%;
  }

  .card-2 {
    top: 45%;
    left: 5%;
  }

  .card-3 {
    bottom: 5%;
    right: 25%;
  }
}

/* Small Mobile (320px - 480px) */
@media (max-width: 480px) {
  .hero {
    min-height: 65vh;
    padding-top: 2rem;
  }

  .hero-container {
    padding: 0 0.75rem;
    gap: 1.5rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 250px;
    min-width: unset;
  }

  .hero-visual {
    height: 220px;
  }

  .floating-card {
    padding: 0.875rem;
    min-width: 90px;
  }

  .card-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  .card-content h3 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  .card-content p {
    font-size: 0.75rem;
  }

  .card-1 {
    top: 0;
    right: 5%;
  }

  .card-2 {
    top: 50%;
    left: 0;
  }

  .card-3 {
    bottom: 0;
    right: 20%;
  }
}

/* Ultra-wide screens (1600px+) */
@media (min-width: 1600px) {
  .hero-container {
    max-width: 1600px;
  }

  .hero-visual {
    height: 700px;
  }

  .floating-card {
    padding: 2.5rem;
    min-width: 180px;
  }
}

/* Landscape Mobile */
@media (max-width: 767px) and (orientation: landscape) {
  .hero {
    min-height: 100vh;
  }

  .hero-container {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
    text-align: left;
  }

  .hero-buttons {
    justify-content: flex-start;
    flex-direction: row;
  }

  .hero-visual {
    height: 250px;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .floating-card,
  .bg-decoration {
    animation: none;
  }

  .btn-primary,
  .btn-secondary {
    transition: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .hero {
    background: var(--primary-white);
  }

  .hero-gradient {
    background: var(--text-dark);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .floating-card {
    border: 2px solid var(--text-dark);
  }
}

/* Focus states for accessibility */
.btn-primary:focus,
.btn-secondary:focus {
  outline: 3px solid var(--accent-color);
  outline-offset: 2px;
}

/* Print styles */
@media print {
  .hero {
    min-height: auto;
    padding: 2rem 0;
    background: none;
  }

  .hero-visual,
  .bg-decoration {
    display: none;
  }

  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .btn-primary,
  .btn-secondary {
    display: none;
  }
}
</style>
