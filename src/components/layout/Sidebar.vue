<template>
    <div
        :style="cssSidebar"
        :class="{ 'i-sidebar-mini': mini }"
        class="i-sidebar"
    >
        <div class="i-sidebar-header">
            <div class="i-logo">
                <img :src="APP_LOGO" alt="" />
            </div>
            <h1 v-if="!mini" class="i-app-title">{{ APP_TITLE }}</h1>
            <a
                @click="handleSidebarToggle"
                class="ri-menu-4-line i-sidebar-toggle i-btn"
            ></a>

            <!-- <n-auto-complete
                :options="searchResult"
                v-model:value="searchValue"
                class="i-header-search"
            >
                <template #prefix><i class="ri-search-line"></i></template>
            </n-auto-complete> -->
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
</template>

<script>
import {
    defineComponent,
    ref,
    onMounted,
    onBeforeUnmount,
    computed,
} from "vue";
import SidebarMenu from "./Sidebar-menu.vue";
import { NScrollbar, NAutoComplete } from "naive-ui";
import { APP_LOGO, APP_TITLE } from "@/settings.js";

export default defineComponent({
    name: "Sidebar",
    components: {
        NScrollbar,
        NAutoComplete,
        SidebarMenu,
    },
    props: {
        menus: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const MINI_WIDTH = 50;
        const menus = ref(props.menus);

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

        const searchResult = ref([]);
        const searchValue = ref("");

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

        return {
            APP_LOGO,
            APP_TITLE,
            menus,
            width,
            resizing,
            cssSidebar,
            mini,
            startResizeSidebar,
            handleSidebarToggle,
            searchResult,
            searchValue,
        };
    },
});
</script>

<style lang="scss" scoped>
.i-sidebar {
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background-secondary);
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
}
.i-logo {
    display: flex;
    height: 40px;
    min-width: 34px;
}
.i-app-title {
    margin: 0 1rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.i-header-search {
    margin-top: 8px;
    width: 100%;
}
.i-menus {
    margin: 20px 8px;
    flex: 1;
}

.i-sidebar-mini {
    .i-sidebar-header {
        flex-direction: column;
    }
}
.i-sidebar-toggle {
    margin-left: auto;
    font-size: 1.4em;
    padding: 6px;
    line-height: 1;
    &:hover {
        background: var(--background);
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
