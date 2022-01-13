import { DEFAULT_CONFIGS, LS_KEY } from "@/settings";
import i18n from "@/locale";

const state = DEFAULT_CONFIGS;

const mutations = {
    CHANGE_THEME: changeTheme,

    CHANGE_LOCALE: changeLocale,

    UPDATE_SETTINGS: (state, form) => {
        Object.assign(state, form);

        changeTheme(state, state.theme);
        changeLocale(state, state.locale);

        localStorage.setItem(LS_KEY, JSON.stringify(form));
    },

    RESTORE_SETTINGS: (state) => {
        localStorage.setItem(LS_KEY, null);
    },
};

function changeTheme(state, theme) {
    if (theme !== undefined) {
        document.body.classList[theme === "" ? "remove" : "add"]("theme-dark");
    } else {
        state.theme = state.theme === "" ? "theme-dark" : "";
        document.body.classList.toggle("theme-dark");
    }
}

function changeLocale(state, lang) {
    if (lang !== undefined) {
        i18n.global.locale.value = lang;
    } else {
        i18n.global.locale.value =
            i18n.global.locale.value === "cn" ? "en" : "cn";
    }
}

export default {
    namespaced: true,
    state,
    mutations,
};
