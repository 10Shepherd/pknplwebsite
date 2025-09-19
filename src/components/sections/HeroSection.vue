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
            <div class="card-icon"></div>
            <h3>Design</h3>
          </div>
        </div>

        <div class="floating-card card-2">
          <div class="card-content">
            <div class="card-icon"></div>
            <h3>Develop</h3>
          </div>
        </div>

        <div class="floating-card card-3">
          <div class="card-content">
            <div class="card-icon"></div>
            <h3>Deploy</h3>
          </div>
        </div>
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
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.hero-gradient {
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
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

.hero-visual {
  position: relative;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: var(--primary-white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-large);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 0;
  right: 0;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  animation-delay: 2s;
}

.card-3 {
  bottom: 0;
  right: 20%;
  animation-delay: 4s;
}

.card-content {
  text-align: center;
}

.card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-color), #3b82f6);
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.card-content h3 {
  color: var(--text-dark);
  font-weight: 600;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-visual {
    display: none;
  }
}
</style>
