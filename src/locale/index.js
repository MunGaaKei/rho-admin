import { createI18n } from "vue-i18n";
import { DEFAULT_CONFIGS } from "@/settings";

import cn from "./lang/cn";
import en from "./lang/en";

const DEFAULT_LOCALE = DEFAULT_CONFIGS.locale;

export const langs = [
    {
        label: "简体中文",
        value: "cn",
    },
    {
        label: "English",
        value: "en",
    },
];

export default createI18n({
    missingWarn: false,
    silentFallbackWarn: true,
    silentTranslationWarn: true,

    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: { cn, en },
});
