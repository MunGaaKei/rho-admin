const BASE = "/message";

export default [
    {
        name: "Message",
        path: BASE,
        component: () => import("./index.vue"),
        meta: {
            title: "routes.messages",
            hide: true,
            i18n: true,
        },
    },
];
