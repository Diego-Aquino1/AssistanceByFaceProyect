import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// router ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Inicio from './components/Inicio'
import Calendar from './components/Calendar'
import Camara from './components/Camara'
import Cursos from './components/Cursos'
import Alumnos from './components/Alumnos'
import Profesores from './components/Profesores'
import AboutUs from './components/AboutUs'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { // primero muestra el componente Inicio
      path: '/',
      component: Inicio
    },
    { // Calendar
      path: '/calendar',
      component: Calendar
    },
    { // Camara
      path: '/camera',
      component: Camara
    },
    { // Cursos
      path: '/cursos',
      component: Cursos
    },
    { // Alumnos
      path: '/alumnos',
      component: Alumnos
    },
    { // Alumnos
      path: '/profesores',
      component: Profesores
    },
    { // About Us
      path: '/aboutus',
      component: AboutUs
    }
  ]
});
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
