const state = {
    theme: "",
};

const mutations = {
    CHANGE_THEME: (state) => {
        state.theme = state.theme === "" ? "theme-dark" : "";
        document.body.classList.toggle("theme-dark");
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
