import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "remixicon/fonts/remixicon.css";
import "@/assets/css/common.css";

createApp(App).use(store).use(router).mount("#app");

/**
 *  UI: Naive UI['https://www.naiveui.com/zh-CN/light/components/button']
 *  ICON: ['https://remixicon.com']
 */
