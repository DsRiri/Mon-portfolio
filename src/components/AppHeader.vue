<template>
  <header class="header">
    <div class="logo">
      <img :src="logoSrc" alt="Logo" />
    </div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <h1>{{ siteTitle }}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: "MyPortfolio",
      logoSrc: require('@/assets/icon.png')
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px; /* Miglioriamo il padding */
  background-color: #f5f5f5; /* Aggiungiamo uno sfondo leggero */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombreggiatura per dare profondità */
}

.logo img {
  height: 60px; /* logo */
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 40px; /* Espace entre les links */
  margin: 0;
  padding: 0;
}

.navbar li {
  font-size: 18px; /* Font plus grand */
}

.navbar a {
  text-decoration: none;
  color: #353535; /* Colore base dei link */
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #7367f0; /* Colore del testo al passaggio del mouse */
}

h1 {
  font-size: 28px;
  color: #353535;
  margin-right: 50px;
  white-space: nowrap; /* Manteniamo il titolo su una sola riga */
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px; /* Riduciamo il padding per schermi più piccoli */
  }
  
  .navbar ul {
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    margin-right: 0;
    margin-top: 20px;
  }
}
</style>
