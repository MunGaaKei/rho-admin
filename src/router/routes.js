import Main from "@/views/main/index.vue";

import Home from "@/views/home/route";
import Menus from "@/views/menu/route";
import User from "@/views/user/route";
import Setting from "@/views/settings/route";
import Message from "@/views/message/route";

export default [
    {
        name: "Main",
        path: "/",
        component: Main,
        meta: {
            title: "主页",
        },
        children: [...Home, ...Menus, ...User, ...Setting, ...Message],
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "用户登陆",
        },
    },
    {
        name: "404",
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/404/index.vue"),
        meta: {
            title: "404",
        },
    },
];
