import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioAv from './componentes/FormularioAv/index.vue'
import Http from './componentes/Http.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/inicio' },
        { path: '/inicio', component: FormularioAv },
        { path: '/usuarios', component: Http },
    ]
})