const BASE = "/settings";

export default [
    {
        name: "Settings",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "设置",
            hide: true,
        },
    },
];
