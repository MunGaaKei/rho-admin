import request from "@/utils/request";

/**
 * 登陆
 * @param {*} data
 * @returns
 */
export function UserLogin(data) {
    return request({
        url: `login`,
        method: "post",
        data,
    });
}

/**
 * 测试登陆
 * @param {*} formData
 * @returns
 */
export function __UserLogin({ username, password }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (username === "admin") {
                if (password === "admin") {
                    resolve({
                        code: 200,
                        token: "scott-administrator",
                        name: "Scott",
                        avatar: "https://pic3.zhimg.com/v2-e3ae8f073ab9a9d52688f23d414f1b02_b.jpg",
                        role: "admin",
                    });
                } else {
                    resolve({
                        code: 2,
                        msg: "Wrong Password",
                    });
                }
            } else {
                resolve({
                    code: 1,
                    msg: "User Doesn' Exist",
                });
            }
        }, 1000);
    });
}

/**
 * 注销
 * @returns
 */
export function UserLogout() {
    return request({
        url: `logout`,
        method: "post",
    });
}
