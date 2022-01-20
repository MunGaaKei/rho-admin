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
                <span class="i-menu-title" :class="{ 'i-hide-on-mini': root }">
                    {{ titleFormatter(menu.meta) }}
                </span>
            </router-link>
            <i
                v-if="menu.children?.length"
                class="ri-arrow-down-s-line i-menu-toggle"
                :class="{ 'i-hide-on-mini': root }"
                @click="handleToggle(menu.path)"
            ></i>
        </div>
        <ul v-if="menu.children?.length" class="i-sub-menu">
            <Menu :menus="menu.children" :root="false"></Menu>
        </ul>
    </li>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Menu",
    props: {
        menus: {
            type: Array,
            default: [],
        },
        root: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        const Router = useRouter();
        const Route = useRoute();
        const { t } = useI18n();

        const active = ref(Route.path);

        Router.afterEach((to) => {
            active.value = to.fullPath;
        });

        function handleToggle(path) {
            if (active.value === path) {
                active.value = "/";
            } else {
                active.value = path;
            }
        }

        function titleFormatter({ i18n, title, titleFormat }) {
            if (i18n) {
                title = t(title);
                return titleFormat ? titleFormat(title) : title;
            } else {
                return title;
            }
        }

        return {
            active,
            handleToggle,
            titleFormatter,
        };
    },
});
</script>

<style lang="scss" scoped>
.i-menu-li {
    position: relative;
    margin: 2px 0;
    transition: var(--transition);
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    border-radius: var(--radius);
    color: var(--color-slight);
}
.i-sub-menu {
    z-index: 1;
    box-sizing: border-box;
    height: 0;
    padding: 0 0 0 2rem;
    font-size: 0.86em;
    transition: var(--transition);
    border-radius: 0 0 var(--radius) var(--radius);
    background: var(--background);
}
.i-active {
    & > .i-menu-item {
        background: var(--background-secondary);
        color: var(--color);
        & > .i-menu-toggle {
            transform: rotateX(180deg);
        }
    }
    & > .i-sub-menu {
        height: unset;
        padding: 1px 0 1px 2rem;
    }
}
.i-menu-item {
    display: flex;
    transition: inherit;
    border-radius: var(--radius);
    &:hover {
        background: var(--background-secondary);
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
    .i-hide-on-mini {
        display: none;
    }
    .i-menu-li {
        position: relative;
        &:hover {
            overflow: unset;
        }
        &.i-active {
            box-shadow: var(--shadow);
        }
    }
    .i-sub-menu {
        position: absolute;
        left: 100%;
        top: 0;
        margin-left: 1px;
        width: 160px;
        height: unset;
        padding: 0 2px;
        font-size: 1em;
        background: var(--background);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
    }
}
</style>
