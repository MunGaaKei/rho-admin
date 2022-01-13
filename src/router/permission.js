import { ROUTE_WHITE_NAME_LIST } from "@/settings.js";
import { getUserToken } from "@/utils/auth.js";

/* 已登陆 => 白名单 => 角色 => OK */

/**
 * @returns ${code}:
 * 0: OK
 * 1: Need to login
 * 2: Need access
 */
export function hasPermission({ path, meta: { auth = [] } }) {
    const user = getUserToken();
    if (user) {
        if (
            ROUTE_WHITE_NAME_LIST.includes(path) ||
            !auth.length ||
            auth.includes(user.role)
        ) {
            return 0;
        } else {
            return 2;
        }
    } else {
        if (path === "/login") {
            return 0;
        } else {
            return 1;
        }
    }
}
