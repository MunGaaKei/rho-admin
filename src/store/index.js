import { createStore } from "vuex";

import user from "./user";
import tabs from "./tabs";

export default createStore({
    modules: {
        user,
        tabs,
    },
});
