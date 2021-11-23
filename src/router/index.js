import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'

const routes = [{
        path: '/',
        name: 'Acceuil',
        component: Acceuil
    },
    {
        path: '/Product',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Product" */ '../views/Product.vue')
    },
    {
        path: '/AddProduct',
        name: 'addproduct',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddProduct" */ '../views/AddProduct.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/Category',
        name: 'category',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Category" */ '../views/Category.vue')
    },

    {
        path: '/AddCategory',
        name: 'addCategory',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddCategory" */ '../views/AddCategory.vue')
    },
    {
        path: '/Command',
        name: 'commande',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Command" */ '../views/Command.vue')
    },
    {
        path: '/AddCommand',
        name: 'addcommand',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddCommand" */ '../views/AddCommand.vue')
    },
    {
        path: '/Movement',
        name: 'movement',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Movement" */ '../views/Movement.vue')
    },
    {
        path: '/AddMovement',
        name: 'addmovement',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddMovement" */ '../views/AddMovement.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router