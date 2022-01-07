<template>
    <div
        :style="cssSidebar"
        :class="{ 'i-sidebar-mini': mini }"
        class="i-sidebar"
    >
        <div class="i-sidebar-header">
            <n-skeleton
                v-if="loading"
                :width="40"
                :height="24"
                :sharp="false"
            ></n-skeleton>
            <div class="i-logo">
                <img :src="APP_LOGO" @load="loading = false" />
            </div>
            <h1 v-if="!mini" class="i-app-title">{{ APP_TITLE }}</h1>
            <a
                @click="toggleModalSearch"
                class="ri-search-line i-sidebar-search i-btn"
            ></a>
            <a
                @click="handleSidebarToggle"
                class="ri-menu-4-line i-sidebar-toggle i-btn"
            ></a>
        </div>

        <ul v-if="mini" class="i-menus">
            <SidebarMenu :menus="menus"></SidebarMenu>
        </ul>
        <n-scrollbar v-else>
            <ul class="i-menus">
                <SidebarMenu :menus="menus"></SidebarMenu>
            </ul>
        </n-scrollbar>

        <div
            @mousedown="startResizeSidebar"
            class="i-sidebar-toggle-line"
        ></div>
    </div>

    <n-modal v-model:show="modalSearch" :bordered="false">
        <n-auto-complete
            v-model:value="valueSearch"
            :options="optionsSearch"
            :placeholder="t('common.search')"
            class="i-search"
            clearable
            size="large"
        ></n-auto-complete>
    </n-modal>
</template>

<script>
import { useStore } from "vuex";
import {
    defineComponent,
    ref,
    onMounted,
    onBeforeUnmount,
    computed,
} from "vue";
import SidebarMenu from "./Sidebar-menu.vue";
import { NScrollbar, NAutoComplete, NModal, NSkeleton } from "naive-ui";
import { APP_LOGO, APP_TITLE } from "@/settings.js";
import { useI18n } from "vue-i18n";
import routes from "@/router/routes";
import { filterMenus } from "@/utils/utils";

export default defineComponent({
    name: "Sidebar",
    components: {
        NScrollbar,
        NAutoComplete,
        SidebarMenu,
        NModal,
        NSkeleton,
    },
    setup() {
        const Store = useStore();
        const MINI_WIDTH = 50;
        const menus = filterMenus(routes, Store.state.user.role);
        const { t } = useI18n();

        const width = ref(MINI_WIDTH);
        const resizing = ref(false);
        const cssSidebar = computed(() => {
            let text = `width: ${width.value}px;`;
            if (resizing.value) {
                text += "transition: none !important;";
            }
            return text;
        });
        const mini = computed(() => {
            return width.value < 120;
        });
        const modalSearch = ref(false);
        const valueSearch = ref("");
        const optionsSearch = ref([]);
        const loading = ref(true);

        let ox = 0;
        let ow = width.value;
        let cacheWidth = ow;

        onMounted(() => {
            if (window.innerWidth > 720) {
                width.value = cacheWidth = 240;
            }

            document.addEventListener("mouseup", handleMouseup);
            document.addEventListener("mousemove", handleMousemove);
        });

        onBeforeUnmount(() => {
            document.removeEventListener("mouseup", handleMouseup);
            document.removeEventListener("mousemove", handleMousemove);
        });

        function handleMousemove(e) {
            if (resizing.value) {
                e.preventDefault();
                let w = ow + (e.pageX - ox);
                if (w < 120) {
                    w = MINI_WIDTH;
                }
                width.value = w;
            }
        }

        function handleSidebarToggle() {
            width.value = width.value === MINI_WIDTH ? cacheWidth : MINI_WIDTH;
        }

        function handleMouseup() {
            if (resizing.value) {
                resizing.value = false;
                if (width.value !== 50) {
                    cacheWidth = width.value;
                }
            }
        }

        function startResizeSidebar(e) {
            resizing.value = true;
            ox = e.pageX;
            ow = width.value;
        }

        function toggleModalSearch() {
            modalSearch.value = !modalSearch.value;
        }

        function handleLogoLoad() {
            loading.value = false;
        }

        return {
            APP_LOGO,
            APP_TITLE,
            loading,
            menus,
            cssSidebar,
            mini,
            valueSearch,
            modalSearch,
            optionsSearch,
            toggleModalSearch,
            startResizeSidebar,
            handleSidebarToggle,
            t,
        };
    },
});
</script>

<style lang="scss" scoped>
.i-sidebar {
    position: relative;
    max-width: 100%;
    border-right: 2px solid var(--background-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: var(--transition);
}
.i-sidebar-header {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    padding: 12px 8px;
    background: inherit;
    .i-btn {
        font-size: 1.4em;
        padding: 6px;
        line-height: 1;
        &:hover {
            background: var(--background);
        }
    }
}
.i-logo {
    display: flex;
    height: 24px;
}
.i-app-title {
    margin: 0 1rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.i-sidebar-search {
    margin-left: auto;
}
.i-search {
    width: 400px;
    max-width: 100%;
    margin: 120px auto 40px;
    align-self: flex-start;
}
.i-menus {
    margin: 20px 8px;
    flex: 1;
    align-self: stretch;
}

.i-sidebar-mini {
    .i-sidebar-header {
        flex-direction: column;
    }
    .i-sidebar-search {
        order: 1;
    }
    .i-logo {
        margin-bottom: 12px;
    }
}
.i-sidebar-toggle-line {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    cursor: ew-resize;
}
</style>
