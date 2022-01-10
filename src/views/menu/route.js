const BASE = "/menu";

export default [
    {
        name: "Menu",
        path: BASE,
        redirect: `${BASE}/1`,
        component: () => import("./index.vue"),
        meta: {
            title: "routes.menu",
            icon: '<i class="ri-folder-3-line"></i>',
            i18n: true,
        },
        children: [
            {
                name: "Menu-1",
                path: `${BASE}/1`,
                component: () => import("./menu-1.vue"),
                meta: {
                    title: "routes.menu",
                    titleFormat: (title) => `${title} I`,
                    auth: [],
                    i18n: true,
                },
            },
            {
                name: "Menu-2",
                path: `${BASE}/2`,
                component: () => import("./menu-2.vue"),
                meta: {
                    title: "routes.menu",
                    titleFormat: (title) => `${title} II`,
                    auth: [],
                    i18n: true,
                },
            },
        ],
    },
];
