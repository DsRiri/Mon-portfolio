<template>
  <div class="project-list">
    <h2>My Projects</h2>
    <div class="projects-grid">
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.link"
      />
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Moyenne',
          description: 'Calcul Moyenne.',
          image: require('@/assets/Moyenne.png'),
          link: 'file:///D:/ESERCIZI%20CEF/Cr%C3%A9ez%20votre%20premier%20script%20JavaScript/index.html',
        },
        {
          id: 2,
          title: 'Cv with Html and Css',
          description: 'A Cv online built with HTML and CSS.',
          image: require('@/assets/Cgi.png'),
          link: 'https://github.com/DsRiri/CV.git',
        },
      ],
    };
  },
};
</script>

