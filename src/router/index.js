import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { hasPermission } from "./permission";

const Router = createRouter({
    history: createWebHistory(),
    routes,
});

Router.beforeEach((to, from, next) => {
    let { title } = to.meta;
    document.title = title;
    next();
});

export default Router;
