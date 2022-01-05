const BASE = "/home";

export default [
    {
        name: "Home",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "routes.home",
            i18n: true,
            noCached: true,
            icon: '<i class="ri-hotel-fill"></i>',
        },
    },
];
