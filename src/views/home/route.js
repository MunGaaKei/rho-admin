const BASE = "/home";

export default [
    {
        name: "Home",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "首页",
            noCache: true,
            icon: '<i class="ri-hotel-fill"></i>',
        },
    },
];
