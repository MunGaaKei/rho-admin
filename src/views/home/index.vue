<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import NavTabs from "@/components/Nav-tabs.vue";
</script>

<template>
    <div class="jing-container">
        <Sidebar></Sidebar>
        <div class="jing-content">
            <Header></Header>
            <NavTabs active="home"></NavTabs>
            <div class="jing-content">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component"></component>
                    </keep-alive>
                </router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jing-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
}
.jing-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
}
</style>
