const BASE = "/menu";

export default [
    {
        name: "Menu",
        path: BASE,
        redirect: `${BASE}/1`,
        component: () => import("./index.vue"),
        meta: {
            title: "菜单",
            icon: '<i class="ri-folder-3-line"></i>',
        },
        children: [
            {
                name: "Menu-1",
                path: `${BASE}/1`,
                component: () => import("./menu-1.vue"),
                meta: {
                    title: "菜单 1",
                    auth: [],
                },
            },
            {
                name: "Menu-2",
                path: `${BASE}/2`,
                component: () => import("./menu-2.vue"),
                meta: {
                    title: "菜单 2",
                    auth: [],
                },
            },
        ],
    },
];
