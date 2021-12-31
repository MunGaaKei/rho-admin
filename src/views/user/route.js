const BASE = "/user";

export default [
    {
        name: "User",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "routes.user",
            i18n: true,
            hide: true,
        },
    },
];
