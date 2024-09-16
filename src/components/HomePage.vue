<template>
  <div id="home">
    <header class="header">
      <div class="text-content">
        <h1>{{ fullName }}</h1>
        <p>{{ shortPresentation }}</p>
        <button @click="downloadCV" class="download-button">Download CV</button>
      </div>
      <img :src="headerImage" alt="Developer Image" class="developer-image" />
    </header>

    <section id="projects" class="projects-section">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <ProjectItem
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue';
import developerImage from '@/assets/developer.png';
import moyenneImage from '@/assets/Moyenne.png';
import cgiImage from '@/assets/Cgi.png';

export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      fullName: 'HI, I AM RIM',
      shortPresentation: 'A Full-Stack Developer & Design Enthusiast.',
      headerImage: developerImage, 
      projects: [
        {
          title: 'Moyenne',
          description: 'Calcul Moyenne.',
          image: moyenneImage,
          link: 'file:///D:/ESERCIZI%20CEF/Cr%C3%A9ez%20votre%20premier%20script%20JavaScript/index.html',
        },
        {
          title: 'CV with HTML and CSS',
          description: 'A CV online built with HTML and CSS.',
          image: cgiImage,
          link: 'https://github.com/DsRiri/CV.git',
        },
      ]
    };
  },
  methods: {
    downloadCV() {
      const cvURL = process.env.BASE_URL + 'cv.pdf'; // Assicurati che il file sia nella cartella "public"
      const link = document.createElement('a');
      link.href = cvURL;
      link.download = 'Rim_CV.pdf';
      link.click();
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  margin-top: 100px;
  min-width: 768px;
}

.text-content {
  font-size: 2rem;
  line-height: 2rem;
  flex: 1;
}

.developer-image {
  max-width: 500px;
  height: auto;
  display: block;
}

.download-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #7367f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.download-button:hover {
  background-color: #5e5ce6;
}

.projects-section {
  padding: 50px 0;
  background-color: #f9f9f9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
}
</style>
