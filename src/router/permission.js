const WHITE_LIST = ["/", "/login"];

export function usePermission(Router) {
    Router.beforeEach((to, from, next) => {
        next();
    });
}

export function hasPermission() {}
