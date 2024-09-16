import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HomePage from './components/HomePage.vue'; 

createApp(HomePage).mount('#app');
createApp(App).use(router).mount('#app');


