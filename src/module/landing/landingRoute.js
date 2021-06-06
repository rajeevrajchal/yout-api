import Home from "./views/Home";
import Watch from "./views/Watch";

export const landingRoute = [
    {
        key: 'home',
        path: '/',
        component: Home,
        exact: true
    },
    {
        key: 'watch',
        path: '/watch/:videoID',
        component: Watch,
        exact: true
    }
]
