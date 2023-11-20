import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl';
import './assets/global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleExclamation, faDownload, faEye, faPencil, faPlus, faSearch, faSuitcase, faTrash, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW5jaGlwYW5hIiwiYSI6ImNsbndmZzI5ejA3MjgybWxqYXE3c2pvYjEifQ.qiDCQKvo4OxQAga-t0yyZA';

if ( !navigator.geolocation ) {
    throw new Error('Tu navegador no soportaa el Geolocation')
}


library.add(faUsers, faUser, faPlus, faDownload, faSearch, faSuitcase, faEye, faPencil, faTrash, faCircleExclamation)


createApp(App)
.component('font-awesome', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
