<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="#" aria-label="Website"><i class="fas fa-globe"></i></a>
      <a href="https://github.com/DsRiri" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
    </div>
    <p>&copy; 2024 Rim's Portfolio. Developed by RIM.</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
 
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.social-icons a {
  display: inline-block;
  margin: 0 105px;
  font-size: 24px;
  color: #7e8a97; 
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #333; 
}

p {
  color: #7e8a97; 
  font-size: 22px;
}
</style>
