const BASE = "/settings";

export default [
    {
        name: "Settings",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "routes.setting",
            hide: true,
        },
    },
];
