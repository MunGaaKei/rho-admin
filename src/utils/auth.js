import Cookie from "js-cookie";

export function getToken(key) {
    return Cookie.get(key);
}
