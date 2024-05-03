import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faGithub,);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
