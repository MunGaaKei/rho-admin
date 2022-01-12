import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/locale";

import "remixicon/fonts/remixicon.css";
import "@/assets/scss/main.scss";

createApp(App).use(i18n).use(store).use(router).mount("#app");

/**
 *  UI: Naive UI['https://www.naiveui.com/zh-CN/light/components/button']
 *  ICON: ['https://remixicon.com']
 */
