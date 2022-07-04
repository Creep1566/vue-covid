import VueRouter from "vue-router";
import Vue from "vue";
import Home from '../views/Home/Home.vue'

const Wuzi = () => import("../views/wuzi/Wuzi.vue")
const Citys = () => import("../views/Citys/Citys.vue")
const TravelCity = () => import('../views/TravelCity/TravelCity.vue')
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/wuzi',
            name: "Wuzi",
            component: Wuzi,
        },
        {
            path: '/citys/:cityname',
            name: "Citys",
            component: Citys,
            props: true
        },
        {
            path: '/TravelCity',
            name: "TravelCity",
            component: TravelCity,
        },
        {
            path: '/CityQuery',
            name: 'CityQuery',
            component: () => import('../views/CityQuery/CityQuery.vue')
        }
    ]
})
export default router