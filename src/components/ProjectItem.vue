<template>
  <div class="project-item">
    <img :src="image" alt="Project image" class="project-image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">View Project</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    link: String,
  },
};
</script>

  <style scoped>
  .project-item {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    background-color: #f9f9f9;

  }
  .project-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  </style>
  