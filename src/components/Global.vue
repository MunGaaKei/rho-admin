<script setup>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { NConfigProvider, darkTheme } from "naive-ui";

const Store = useStore();
const theme = ref(null);

const styleDefault = {
    common: {
        borderRadius: "4px",
    },
    Form: {
        feedbackTextColorError: "#EF4668",
    },
    Input: {
        border: "none",
        borderHover: "none",
        borderFocus: "none",
        paddingMedium: "20px",
        errorColorHover: "#FC536E",
        borderError: "1px solid #FC536E",
        borderFocusError: "1px solid #FC536E",
        borderHoverError: "1px solid #FC536E",
    },
};

const styleLight = {
    common: {
        primaryColor: "#3a3a3aFF",
        primaryColorHover: "#2a2a2aFF",
        primaryColorPressed: "#000000FF",
        primaryColorSuppl: "#3f3f3fFF",
    },
};

const styleDark = {
    common: {
        primaryColor: "#fafafa",
        primaryColorHover: "#fff",
        primaryColorPressed: "#fafafa99",
        primaryColorSuppl: "#f3f3f3",
    },
};

const globalStyle = ref(
    Object.assign(
        Store.state.settings.theme === "theme-dark" ? styleDark : styleLight
    )
);

watchEffect(() => {
    let isDark = Store.state.settings.theme === "theme-dark";
    theme.value = isDark ? darkTheme : null;
    globalStyle.value = Object.assign(
        styleDefault,
        isDark ? styleDark : styleLight
    );
});
</script>

<template>
    <n-config-provider :theme="theme" :theme-overrides="globalStyle">
        <slot></slot>
    </n-config-provider>
</template>

<style>
.n-input-wrapper {
    background: var(--background-secondary);
    border-radius: 4px;
}
</style>
