import Main from "@/views/main/index.vue";

import Home from "@/views/home/route";
import Menus from "@/views/menu/route";
import User from "@/views/user/route";
import Setting from "@/views/settings/route";
import Message from "@/views/message/route";

/**
 * ${param} meta:
 * title: String
 * auth: Array[] 权限
 * i18n: Boolean
 * icon: String('<i class="ri-hotel-fill"></i>')
 * noCached: Boolean 不缓存，默认false
 * hide: Boolean 在侧边栏隐藏，默认false
 */
export default [
    {
        name: "Main",
        path: "/",
        component: Main,
        meta: {
            title: "routes.home",
            i18n: true,
        },
        children: [...Home, ...Menus, ...User, ...Setting, ...Message],
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "routes.signin",
            i18n: true,
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
