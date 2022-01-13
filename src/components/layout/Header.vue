<template>
    <div class="i-header">
        <nav-tabs></nav-tabs>

        <div class="i-header-items">
            <div class="i-dropdown">
                <a class="ri-more-fill i-btn"></a>
                <div class="i-dropmenu">
                    <a @click="changeLocale" class="ri-translate i-btn"></a>

                    <router-link to="/settings" class="i-btn">
                        <i class="ri-settings-3-fill"></i>
                    </router-link>

                    <a
                        @click="changeTheme"
                        class="ri-moon-clear-fill i-btn"
                    ></a>

                    <a
                        class="ri-fullscreen-line i-btn"
                        @click="fullscreen()"
                    ></a>
                </div>
            </div>

            <n-tooltip>
                <template #trigger>
                    <router-link
                        v-if="user.name"
                        to="/user"
                        class="i-btn i-user"
                    >
                        <!-- <n-avatar
                            :src="user.avatar"
                            class="i-avatar"
                        ></n-avatar> -->
                        <span class="i-avatar">
                            {{ firstLetter(user.name) }}
                        </span>
                    </router-link>

                    <router-link
                        v-else
                        to="/login"
                        class="ri-ghost-fill i-btn"
                    ></router-link>
                </template>
                <span v-if="user.name">{{ user.name }}</span>
                <span v-else>{{ t("common.sign_in") }}</span>
            </n-tooltip>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { NTooltip, NAvatar } from "naive-ui";
import NavTabs from "./Nav-tabs.vue";
import { fullscreen } from "@/utils/utils";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Header",
    components: {
        NAvatar,
        NTooltip,
        NavTabs,
    },
    setup(props, { attrs }) {
        const Store = useStore();
        const user = Store.state.user;
        const { t } = useI18n();

        function changeLocale() {
            Store.commit("settings/CHANGE_LOCALE");
        }

        function changeTheme() {
            Store.commit("settings/CHANGE_THEME");
        }

        function firstLetter(name) {
            return name.substr(0, 1).toUpperCase();
        }

        return {
            user,
            attrs,
            fullscreen,
            changeTheme,
            changeLocale,
            firstLetter,
            t,
        };
    },
});
</script>

<style lang="scss" scoped>
.i-header {
    position: relative;
    display: flex;
    white-space: nowrap;
    max-width: 100%;
    [class^="ri"] {
        font-size: 1.4em;
    }
}
.i-header-items {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 4px;
    height: var(--header-height);
    background: var(--background);
}
.i-dropdown {
    &:hover {
        .i-dropmenu {
            opacity: 1;
            pointer-events: unset;
        }
    }
}
.i-dropmenu {
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    opacity: 0;
    pointer-events: none;
    transform: translate(0, -4px);
    transition: var(--transition);
    background: var(--background);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 var(--radius) var(--radius);
    .i-btn {
        margin: 1px;
    }
}
.i-user {
    padding: 0;
    margin-left: 8px;
}
.i-avatar {
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: var(--background-secondary);
    border-radius: var(--radius);
}
</style>
