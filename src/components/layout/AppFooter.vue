<template>
  <footer
    class="footer"
    v-motion
    :initial="{ y: 50, opacity: 0 }"
    :visible-once="{ y: 0, opacity: 1 }"
    :transition="{ duration: 600 }"
  >
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Parth Knowledge Network Pvt. Ltd.</h3>
          <p>
            Parth Knowledge Network Pvt. Ltd. a Training Partner (TP) for Maharashtra Knowledge
            Corporation Limited (MKCL) programs.
          </p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p>Parth Knowledge Network Pvt. Ltd.</p>
          <p>Plot No. 20, Sector 17, Airoli, Navi Mumbai, Maharashtra - 400708</p>
          <p>connect@parthinfo.com support@parthinfo.com</p>
          <p>+91 9820313212, 7738146959, 8384858685</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 PKNPL. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--off-white);
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.footer-section p {
  color: var(--text-gray);
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: var(--text-gray);
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--medium-gray);
  text-align: center;
  color: var(--text-gray);
}
</style>
