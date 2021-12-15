import Home from "@/views/home/index.vue";

export default [
    {
        name: "Home",
        path: "/",
        component: Home,
        meta: {
            title: "首页",
            roles: [],
        },
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "用户登陆",
            roles: [],
        },
    },
    {
        name: "Menu",
        path: "/menu",
        component: () => import("@/views/menu/index.vue"),
        children: [
            {
                name: "Menu-1",
                path: "/menu-1",
                component: () => import("@/views/menu/menu-1.vue"),
                meta: {
                    title: "子菜单",
                    roles: [],
                },
            },
        ],
        meta: {
            title: "菜单",
            roles: [],
        },
    },
];
