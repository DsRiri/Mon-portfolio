<template>
  <section id="about-me" class="about-section">
    <div class="container">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Hi, I'm <strong>Rim</strong>, a passionate Full-Stack Developer and Design Enthusiast. I love building
            efficient and beautiful web applications. My goal is to create unique experiences for users while
            maintaining clean and maintainable code.
          </p>
        </div>
        <div class="about-image">
          <img :src="profilePicture" alt="Profile Picture" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profilePicture: require('@/assets/profile.png') 
    };
  }
};
</script>

<style scoped>
.about-section {
  padding: 50px 0;
  background-color: #ffffff;
  margin-bottom: 20px; 
}

.container {
  max-width: 1200px; 
  margin: 0 auto; /* content au centre */
  padding: 0 20px; 
}

h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  padding: 20px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.about-text strong {
  color: #7367f0;
}

.about-image {
  flex: 1;
  text-align: center;
}

.about-image img {
  max-width: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


</style>
