import * as Vue from 'vue'
import VueRouter from 'vue-router'
import Lists from '../views/Lists.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Lists',
        component: Lists
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
