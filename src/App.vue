<!-- src/App.vue -->
<template>
  <div class="page-container">
    <AppHeader />
    <div class="content-wrap">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1; 
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
footer {
  background-color: #f5f5f5;
  padding: 10px 0;
  text-align: center;
  color: #888;
}
</style>
