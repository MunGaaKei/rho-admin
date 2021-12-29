import Cookie from "js-cookie";

const TOKEN_ID = "user-id";
const TOKEN_ROLE = "user-role";

export function getUserToken() {
    const Token = Cookie.get(TOKEN_ID);
    if (Token) {
        return JSON.parse(Token);
    } else {
        return false;
    }
}

export function setUserToken(user) {
    Cookie.set(TOKEN_ID, JSON.stringify(user));
}

export function deleteUserToken() {
    Cookie.remove(TOKEN_ID);
    Cookie.remove(TOKEN_ROLE);
}

export function getCookie(key) {
    return Cookie.get(key);
}

export function setCookie(key, value) {
    Cookie.set(key, value);
}
