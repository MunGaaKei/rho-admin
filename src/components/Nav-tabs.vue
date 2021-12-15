<template>
    <div class="jing-nav-tabs">
        <div
            v-for="tab in tabs"
            :key="tab.name"
            class="jing-nav-tab"
            :class="{ 'tab-active': active === tab.name }"
        >
            {{ tab.title }}
        </div>
    </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";

defineProps({
    active: String,
});

console.log(active);

const tabs = reactive([
    {
        title: "首页",
        name: "home",
    },
    {
        title: "菜单",
        name: "menu",
    },
]);
</script>

<style lang="scss" scoped>
.jing-nav-tabs {
    display: flex;
    overflow: auto;
    background: #eee;
}
.jing-nav-tab {
    padding: 0 12px;
    line-height: 30px;
    background: #fafafa;
    cursor: pointer;
}
.jing-nav-tab:hover,
.jing-nav-tab.tab-active {
    background: #fff;
}
</style>
