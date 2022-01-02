import Router from "@/router";

const state = {
    tabs: [],
    active: "",
    noCacheViews: [],
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

        if (tab.noCache === true) {
            state.noCacheViews.push(tab.name);
            state.noCacheViews = [...new Set(state.noCacheViews)];
        } else {
            state.cacheViews.push(tab.name);
            state.cacheViews = [...new Set(state.cacheViews)];
        }
    },

    TABS_CLOSE: (state, tab) => {
        let index = state.tabs.findIndex((t) => {
            return t.name === tab.name;
        });
        if (index > -1) {
            state.tabs.splice(index, 1);
            if (state.tabs.length) {
                tab = state.tabs[index === 0 ? 0 : --index];
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
        let index = state.noCacheViews.findIndex((name) => {
            return name === tab.name;
        });
        if (index < 0) {
            state.noCacheViews.splice(index, 1);
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
