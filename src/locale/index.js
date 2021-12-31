import { createI18n } from "vue-i18n";

import cn from "./lang/cn";
import en from "./lang/en";

const DEFAULT_LOCALE = "en";

export default createI18n({
    missingWarn: false,
    silentFallbackWarn: true,
    silentTranslationWarn: true,

    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: { cn, en },
});
