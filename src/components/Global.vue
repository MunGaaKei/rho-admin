<template>
    <n-config-provider :theme-overrides="globalStyle" abstract>
        <slot></slot>
    </n-config-provider>
</template>

<script setup>
import { NConfigProvider } from "naive-ui";

const globalStyle = {
    common: {
        borderRadius: "4px",
        primaryColor: "#3a3a3aFF",
        primaryColorHover: "#2a2a2aFF",
        primaryColorPressed: "#000000FF",
        primaryColorSuppl: "#3f3f3fFF",
    },
    Form: {
        feedbackTextColorError: "#EF4668",
    },
    Input: {
        border: "none",
        borderHover: "none",
        borderFocus: "none",
        errorColorHover: "#FC536E",
        borderError: "1px solid #FC536E",
        borderFocusError: "1px solid #FC536E",
        borderHoverError: "1px solid #FC536E",
        paddingMedium: "20px",
    },
};
</script>

<style>
.n-input-wrapper {
    background: #f1f1f1;
    border-radius: 4px;
}
</style>
