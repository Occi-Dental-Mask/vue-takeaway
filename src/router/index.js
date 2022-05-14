import { createRouter, createWebHashHistory } from "vue-router";
import Register from '../views/register/register.vue'
const routes = [
    { 
        path: '/', name: 'Home', 
        component: () => import(/*webpackChunkName:"about*/'../views/home/home.vue')
    },
    {
        path: '/orderConfirm/:id',
        name: 'OrderConfirm',
        component: () => import(/*webpackChunkName:"orderConfirm*/'../views/orderConfirm/OrderConfirm.vue')
    },
    { 
        path: '/cart', name: 'Cart', 
        component: () => import(/*webpackChunkName:"cart*/'../views/cart/Cart.vue')
    },
    {
        path: '/login', name: 'Login', 
        component: () => import(/*webpackChunkName:"login*/'../views/login/login.vue'),
        beforeEnter: (to, from, next) => {
            // ...
            const { isLogin } = localStorage
            isLogin ? next({ name: 'Home' }) : next()
        }
    },
    {
        path: '/shop/:id', name: 'Shop', 
        component: () => import(/*webpackChunkName:"shop*/'../views/shop/shop.vue'),
    },
    {
        path: '/register', name: 'Register', component: Register,
        beforeEnter: (to, from, next) => {
            // ...
            const { isLogin } = localStorage
            isLogin ? next({ name: 'Home' }) : next()
        }
    },


]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach((to, from ,next) => {
    const { isLogin } = localStorage;
    const { name } = to;
    const isLoginOrRegister = (name === "Login" || name === "Register");
    (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
  })
export default router