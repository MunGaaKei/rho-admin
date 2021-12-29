import { ON_PERMISSION } from "@/settings.js";

/**
 *
 * @param {*} menus Array
 * @param {*} role String
 * @returns Accessable menus
 */
function filterMenus(menus, role) {
    menus = menus.find((menu) => {
        return menu.name === "Main";
    })?.children;

    return filterMenusItems(menus, role);
}

function filterMenusItems(menus, role) {
    return menus.filter((menu) => {
        let {
            meta: { auth = [], hide },
            children = [],
        } = menu;

        if (hide) {
            return false;
        }

        if (children.length) {
            menu.children = filterMenusItems(children, role);
        }

        return ON_PERMISSION ? !auth.length || auth.includes(role) : true;
    });
}

/**
 *
 * @param {*} target fullscreen target
 */
function fullscreen(target) {
    target = target || document.documentElement;
    let $current =
        document.fullscreenElement || document.webkitFullscreenElement;
    if ($current) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(
            document
        );
    } else {
        (target.requestFullscreen || target.webkitRequestFullScreen).call(
            target
        );
    }
}

export { filterMenus, fullscreen };
