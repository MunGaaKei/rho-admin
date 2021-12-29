import { __UserLogin } from "@/api/user";
import { setUserToken, deleteUserToken } from "@/utils/auth";
import { USER_LOGIN, USER_LOGOUT, USER_INIT } from "./mutation_types";

function initState() {
    return {
        name: "",
        token: "",
        avatar: "",
        role: "",
    };
}
const state = initState();

const mutations = {
    [USER_LOGIN]: (state, user) => {
        setUserToken(user);
    },

    [USER_LOGOUT]: (state) => {
        state = Object.assign(state, initState());
        deleteUserToken();
    },

    [USER_INIT]: (state, user) => {
        if (!state.token) {
            state = Object.assign(state, user);
        }
    },
};

const actions = {
    LOGIN: async ({ commit }, user) => {
        const result = await __UserLogin(user);
        if (result.code === 200) {
            commit(USER_LOGIN, result);
        }
        return result;
    },

    LOGOUT: ({ commit }) => {
        commit(USER_LOGOUT);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
