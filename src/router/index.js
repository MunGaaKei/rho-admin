import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { APP_TITLE, ON_PERMISSION } from "@/settings.js";
import { hasPermission } from "./permission";
import Locale from "@/locale";

const Router = createRouter({
    history: createWebHistory(),
    routes,
});

Router.beforeEach((to, from, next) => {
    if (ON_PERMISSION) {
        const code = hasPermission(to);
        switch (code) {
            case 1:
                next("/login");
                break;
            case 2:
                next(from.path);
                break;
            default:
                next();
                break;
        }
    } else {
        next();
    }
});

Router.afterEach((to) => {
    let { title, i18n } = to?.meta;

    title = i18n ? Locale.global.t(title) : title;
    document.title = `${APP_TITLE} ${title}`;
});

export default Router;
