import Main from "@/views/main/index.vue";

import Dashboard from "@/views/dashboard/route";
import Menus from "@/views/menu/route";
import User from "@/views/user/route";
import Setting from "@/views/settings/route";

/**
 * ${param} meta:
 * title: String
 * titleFormat Function 配合i18n合成字符串
 * auth: Array[] 权限
 * i18n: Boolean 页面标题是否是i18n识别
 * icon: String('<i class="ri-hotel-fill"></i>')
 * noCached: Boolean 不缓存，默认false
 * hide: Boolean 在侧边栏菜单隐藏，默认false
 */
export default [
    {
        name: "Main",
        path: "/",
        component: Main,
        meta: {
            title: "routes.dashboard",
            i18n: true,
        },
        children: [...Dashboard, ...Menus, ...User, ...Setting],
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "common.sign_in",
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
