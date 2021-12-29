const BASE = "/user";

export default [
    {
        name: "User",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "用户中心",
            hide: true,
        },
    },
];
