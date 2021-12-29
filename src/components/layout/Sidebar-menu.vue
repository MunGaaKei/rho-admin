<template>
    <li
        v-for="menu in menus"
        :key="menu.fullPath"
        class="i-menu-li"
        :class="{ 'i-active': active.startsWith(menu.path) }"
    >
        <div class="i-menu-item">
            <router-link :to="menu.path" class="i-menu-label">
                <span
                    v-if="menu.meta?.icon"
                    v-html="menu.meta.icon"
                    class="i-menu-icon"
                ></span>
                <span class="i-menu-title" :class="{ 'i-hide-mini': root }">{{
                    menu.meta?.title || "Untitled"
                }}</span>
            </router-link>
            <i
                v-if="menu.children?.length"
                class="ri-arrow-down-s-line i-menu-toggle"
                :class="{ 'i-hide-mini': root }"
                @click="handleToggle(menu.path)"
            ></i>
        </div>
        <ul v-if="menu.children?.length" class="i-sub-menu">
            <SidebarMenu :menus="menu.children" :root="false"></SidebarMenu>
        </ul>
    </li>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
    name: "SidebarMenu",
    props: {
        menus: {
            type: Array,
            default: [],
        },
        active: {
            type: String,
            default: "",
        },
        root: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        const Router = useRouter();
        const Route = useRoute();

        let active = ref(props.active);
        let root = ref(props.root);

        active.value = Route.path;

        Router.afterEach((to) => {
            active.value = to.fullPath;
        });

        function handleToggle(path) {
            active.value = active.value ? "" : path;
        }

        return {
            active,
            root,
            handleToggle,
        };
    },
});
</script>

<style lang="scss" scoped>
.i-menu-li {
    position: relative;
    margin: 2px 0;
    transition: var(--transition);
    color: #4a4a4a;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    border-radius: var(--radius);
    &:hover,
    &.i-active {
        background: var(--background);
    }
}
.i-sub-menu {
    z-index: 1;
    box-sizing: border-box;
    height: 0;
    padding: 0;
    font-size: 0.86em;
    transition: var(--transition);
    border-radius: 0 0 var(--radius) var(--radius);
    background: var(--background-secondary);
    border-top: 1px solid transparent;
    .i-menu-li {
        margin: 0;
        &:not(:first-child) {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        &:not(:last-child) {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
}
.i-active > .i-sub-menu {
    height: unset;
    padding: 2px 0;
    background: var(--background);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.i-menu-item {
    display: flex;
    transition: inherit;
    border-radius: inherit;
    &:hover {
        background: var(--background);
        color: var(--color);
    }
}
.i-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    font-size: 1.24em;
}
.i-menu-label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.i-menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1.25em;
    line-height: 1;
    & + span {
        margin-left: 0.5em;
    }
}
.i-menu-title {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
}

.i-sidebar-mini {
    .i-hide-mini {
        display: none;
    }
    .i-menus > .i-menu-li {
        margin: 0 0 8px 0;
    }
    .i-menu-li {
        position: relative;
        &:hover {
            overflow: unset;
            .i-sub-menu {
                height: unset;
            }
        }
    }
    .i-sub-menu {
        position: absolute;
        left: 100%;
        top: 0;
        margin-left: 1px;
        width: 160px;
        padding: 0;
        font-size: 1em;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
        background: var(--background-secondary);
        border-radius: var(--radius);
        border-top: none;
    }
}
</style>
