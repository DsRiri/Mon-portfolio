<!-- src/components/NotFound.vue -->
<template>
  <div class="container">
    <div class="content">
      <h1>Error 404</h1>
      <p>Oops! Page not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>

html, body {
  height: 100%;
  margin: 0;
}

.container {
  min-height: 100vh; /* window height */
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1; /* Occupa lo spazio disponibile */
  text-align: center;
  margin-top: 100px;
}

.content h1 {
  font-size: 80px;
  color: #000;
}

.content p {
  font-size: 24px;
  color: #555;
}

</style>
