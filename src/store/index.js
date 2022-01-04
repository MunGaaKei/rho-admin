import { createStore } from "vuex";

import settings from "./settings";
import user from "./user";
import tabs from "./tabs";

export default createStore({
    modules: {
        settings,
        user,
        tabs,
    },
});
