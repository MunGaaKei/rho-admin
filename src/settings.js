export const LS_KEY = "RHO-SETTINGS";

export const APP_NAME = "Daphne Odera";

export const APP_TITLE = "RHO";

export const APP_LOGO = "/src/assets/logo.png";

export const ON_PERMISSION = true;

export const ROUTE_WHITE_NAME_LIST = ["/", "/login", "/404"];

export const ERROR_IMG = "";

const CONFIGS = {
    theme: "", // theme-dark
    locale: "cn",
};

function initConfigs() {
    const LocalConfigs = localStorage.getItem(LS_KEY);
    const configs = LocalConfigs
        ? Object.assign({}, CONFIGS, JSON.parse(LocalConfigs))
        : CONFIGS;

    if (configs.theme) {
        document.body.classList.add(configs.theme);
    }

    return configs;
}

export const DEFAULT_CONFIGS = initConfigs();
