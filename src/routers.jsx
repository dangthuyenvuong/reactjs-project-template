import { lazy } from "react";

const routers = [
    {
        path: '/about',
        component: lazy(() => import('page/About'))
    },
    {
        path: '/',
        component: lazy(() => import('page/Home'))
    },

]
export default routers