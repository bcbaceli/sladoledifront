import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovaPocetna from '../views/NovaPocetna.vue'
import PrikazSladoleda from '../views/PrikazSladoleda.vue'
import DodajSladoled from '../components/DodajSladoled.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/oldhome',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/',
    name:'NovaPocetna',
    component:NovaPocetna
  },
  {
    path:'/sladoledi',
    name:'PrikazSladoleda',
    component:PrikazSladoleda
  },
  {
    path:'/dodajsladoled',
    name:'DodajSladoled',
    component:DodajSladoled
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router