const BASE = "/message";

export default [
    {
        name: "Message",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "消息中心",
            hide: true,
        },
    },
];
