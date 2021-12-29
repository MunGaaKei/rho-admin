<template>
    <div v-if="tabs.tabs.length" class="i-nav-tabs">
        <n-scrollbar
            x-scrollable
            @wheel.prevent="handleScroll"
            ref="scrollbar$"
        >
            <router-link
                v-for="tab in tabs.tabs"
                :to="tab.fullPath"
                :key="tab.name"
                class="i-nav-tab"
                :class="{ 'tab-active': tabs.active === tab.name }"
                @contextmenu.prevent="handleContextMenu(tab, $event)"
            >
                <span>{{ tab.title }}</span>
                <i class="ri-close-line" @click.prevent="handleClose(tab)"></i>
            </router-link>
        </n-scrollbar>

        <n-dropdown
            :show="showContextMenu"
            :options="ContextMenuOptions"
            :x="CoordX"
            :y="CoordY"
            :on-clickoutside="hideContextMenu"
            @select="handleContextMenuSelect"
            trigger="manual"
            placement="bottom-start"
            ><template></template>
        </n-dropdown>
    </div>
</template>

<script>
import { ref, defineComponent, computed, nextTick, defineEmits } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { NScrollbar, NDropdown } from "naive-ui";

export default defineComponent({
    components: {
        NScrollbar,
        NDropdown,
    },
    setup(props, { emit }) {
        const Store = useStore();
        const Route = useRoute();
        const Router = useRouter();

        const tabs = computed(() => Store.state.tabs);
        const scrollbar$ = ref(null);

        const showContextMenu = ref(false);
        const CoordX = ref(0);
        const CoordY = ref(0);
        const ContextMenuOptions = [
            {
                label: "关闭全部",
                key: "close-all",
            },
            {
                label: "关闭左侧",
                key: "close-left",
            },
            {
                label: "关闭其它",
                key: "close-rest",
            },
            {
                label: "强制刷新",
                key: "refresh",
            },
        ];

        let handledTab = null;

        if (Route.path !== "/") {
            createTab(Route);
        }

        Router.afterEach(createTab);

        function createTab(route) {
            if (route.path === "/" || route.path === "/login") return;
            let {
                name,
                path,
                fullPath,
                meta: { title, noCache },
            } = route;
            Store.commit("tabs/TABS_ADD", {
                title,
                name,
                path,
                noCache,
                fullPath,
            });
        }

        function handleClose(tab) {
            Store.commit("tabs/TABS_CLOSE", tab);
        }

        function handleScroll(e) {
            const $ = scrollbar$.value;
            const delta = e.wheelDelta || -e.deltaY * 40;
            const container$ = $.scrollbarInstRef.containerRef;
            let left = container$.scrollLeft + delta / 4;
            $.scrollTo(left);
        }

        function handleContextMenuSelect(key) {
            switch (key) {
                case "close-all":
                    Store.commit("tabs/TABS_CLOSE_ALL");
                    break;
                case "close-left":
                case "close-rest":
                    Store.commit("tabs/TABS_CLOSE_MULTI", {
                        tab: handledTab,
                        key,
                    });
                    break;
                case "refresh":
                    Store.commit("tabs/TABS_REFRESH", handledTab);
                    emit("refresh-tab", handledTab);
                    break;
                default:
                    break;
            }

            hideContextMenu();
        }

        function handleContextMenu(tab, e) {
            showContextMenu.value = false;
            handledTab = tab;
            nextTick(() => {
                showContextMenu.value = true;
                CoordX.value = e.pageX;
                CoordY.value = e.pageY;
            });
        }

        function hideContextMenu() {
            showContextMenu.value = false;
            handledTab = null;
        }

        return {
            scrollbar$,
            tabs,
            showContextMenu,
            CoordX,
            CoordY,
            ContextMenuOptions,
            handleClose,
            handleScroll,
            handleContextMenu,
            hideContextMenu,
            handleContextMenuSelect,
        };
    },
});
</script>

<style lang="scss" scoped>
.i-nav-tabs {
    position: relative;
    flex: 1;
    min-width: 0;
    touch-action: pan-x;
    background: var(--background-secondary);
    border-bottom-right-radius: var(--radius);
    :deep(.n-scrollbar-content) {
        display: flex;
    }
    :deep(.n-scrollbar > .n-scrollbar-rail.n-scrollbar-rail--horizontal) {
        --scrollbar-height: 0;
        --scrollbar-width: 0;
    }
}
.i-nav-tab {
    display: inline-flex;
    padding: 0 0 0 16px;
    line-height: var(--header-height);
    color: #aaa;
    cursor: pointer;
    flex-shrink: 0;
    transition: var(--transition);
    overflow: hidden;
    & + .i-nav-tab {
        border-left: 1px solid var(--background-secondary);
    }
}
.i-nav-tab:hover,
.i-nav-tab.tab-active {
    background: var(--background);
    color: var(--color);
    font-weight: 500;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
}
.ri-close-line {
    display: flex;
    margin-left: 8px;
    padding: 0 2px 0 4px;
    width: 0;
    font-size: 1.24em;
    text-align: center;
    opacity: 0;
    transition: var(--transition);
    &:hover {
        background: #ff6a6a;
        color: var(--background);
    }
}
.i-nav-tab:hover,
.i-nav-tab.tab-active {
    > .ri-close-line {
        opacity: 1;
        width: 20px;
    }
}
</style>
