const BASE = "/dashboard";

export default [
    {
        name: "Dashboard",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "routes.dashboard",
            i18n: true,
            noCached: true,
            icon: '<i class="ri-dashboard-fill"></i>',
        },
    },
];
