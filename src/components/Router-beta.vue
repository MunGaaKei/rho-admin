<!-- 针对嵌套路由需要缓存的页面 -->
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const Store = useStore();
const cacheViews = computed(() => Store.state.tabs.cacheViews);
</script>

<template>
    <router-view v-slot="{ Component }">
        <keep-alive :include="cacheViews">
            <component :is="Component" :key="$route.fullPath"></component>
        </keep-alive>
    </router-view>
</template>
