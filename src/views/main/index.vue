<script setup>
import { nextTick, ref } from "vue";
import { useStore } from "vuex";
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import { NScrollbar } from "naive-ui";
import routes from "@/router/routes";
import { filterMenus } from "@/utils/utils";
import { mapState } from "@/store/mapStore";

const Store = useStore();
const menus = filterMenus(routes, Store.state.user.role);

const { tabs, cacheViews, noCacheViews } = mapState(Store.state.tabs, [
    "tabs",
    "cacheViews",
    "noCacheViews",
]);

let refresh = ref(true);

function handleRefresh() {
    refresh.value = false;
    nextTick(() => {
        refresh.value = true;
    });
}
</script>

<template>
    <div class="i-container">
        <Sidebar :menus="menus"></Sidebar>

        <div class="i-main">
            <Header @refresh-tab="handleRefresh"></Header>
            <n-scrollbar v-if="tabs.length" class="i-content">
                <router-view v-if="refresh" v-slot="{ Component }">
                    <keep-alive
                        :include="cacheViews"
                        :exclude="noCacheViews"
                        :max="12"
                    >
                        <component
                            :is="Component"
                            :key="$route.fullPath"
                        ></component>
                    </keep-alive>
                </router-view>
            </n-scrollbar>
            <div v-else class="i-empty">
                <i class="ri-layout-masonry-line"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.i-main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
}
.i-content {
    overflow: auto;
}
.i-empty {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.05;
    font-size: 20em;
}
</style>
