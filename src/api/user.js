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
                        token: "rho-administrator",
                        name: "ρ",
                        avatar: "https://e7.pngegg.com/pngimages/550/224/png-clipart-rho-greek-alphabet-letter-case-gamma-letter-p-miscellaneous-angle-thumbnail.png",
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
