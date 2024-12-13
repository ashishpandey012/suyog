import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import App from './App.vue'
import router from './routes';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const app = createApp(App);


createApp(App).use(router).mount('#app');

AOS.init(); 