import { createStore } from "vuex";

import User from "./user";

const store = createStore({
    modules: {
        User,
    },
});

export default store;
