import Router from "@/router";
import { nextTick } from "vue";

const state = {
    tabs: [],
    active: "",
    cacheViews: [],
};

const getters = {};

const mutations = {
    TABS_ADD: (state, tab) => {
        let found = state.tabs.find((t) => {
            return t.name === tab.name;
        });

        if (found) {
            state.active = tab.name;
            found.fullPath = tab.fullPath;
        } else {
            state.active = tab.name;
            state.tabs.push(tab);
        }

        if (tab.noCached !== true) {
            state.cacheViews.push(tab.name);
            state.cacheViews = [...new Set(state.cacheViews)];
        }
    },

    TABS_CLOSE: (state, tab) => {
        let tabIndex = state.tabs.findIndex((t) => {
            return t.name === tab.name;
        });
        let cachedIndex = state.cacheViews.findIndex((v) => {
            return v === tab.name;
        });

        if (cachedIndex > -1) {
            state.cacheViews.splice(cachedIndex, 1);
        }

        if (tabIndex > -1) {
            state.tabs.splice(tabIndex, 1);
            if (state.tabs.length) {
                tab = state.tabs[tabIndex === 0 ? 0 : --tabIndex];
                Router.push({ name: tab.name });
            } else {
                Router.push("/");
            }
        }
    },

    TABS_CLOSE_MULTI: (state, payload) => {
        let { tab, key } = payload;

        switch (key) {
            case "close-others":
                state.tabs = [tab];
                state.active = tab.name;
                break;
            case "close-left":
                let index = state.tabs.findIndex((t) => {
                    return t.name === tab.name;
                });
                index > -1 && state.tabs.splice(0, index);
                state.active = tab.name;
                Router.push({ name: tab.name });
                break;
            default:
                break;
        }
    },

    TABS_CLOSE_ALL: (state) => {
        state.tabs = [];
        state.active = "";
        Router.push("/");
    },

    TABS_REFRESH: (state, tab) => {
        let cacheIndex = state.cacheViews.findIndex((v) => {
            return v === tab.name;
        });
        state.cacheViews.splice(cacheIndex, 1);

        nextTick(() => {
            Router.push({
                query: Object.assign({}, tab.query, {
                    _t: new Date().getTime(),
                }),
            });
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
