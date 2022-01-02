<template>
    <div class="i-header">
        <nav-tabs v-bind="attrs"></nav-tabs>

        <div class="i-header-items">
            <div class="i-dropdown">
                <a class="ri-more-fill i-btn"></a>
                <div class="i-dropmenu">
                    <a @click="changeLocale" class="ri-translate i-btn"></a>

                    <router-link to="/settings" class="i-btn">
                        <i class="ri-settings-3-fill"></i>
                    </router-link>

                    <a class="ri-t-shirt-fill i-btn"></a>
                </div>
            </div>
            <a class="ri-fullscreen-line i-btn" @click="fullscreen()"></a>

            <router-link
                to="/message"
                class="i-btn"
                :class="{ 'i-unread': unread }"
            >
                <i class="ri-notification-3-line"></i>
            </router-link>

            <n-tooltip>
                <template #trigger>
                    <router-link to="/user" class="i-btn i-user">
                        <n-avatar
                            :src="user.avatar"
                            class="i-avatar"
                        ></n-avatar>
                    </router-link>
                </template>
                <span>{{ user.name }}</span>
            </n-tooltip>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { NTooltip, NAvatar } from "naive-ui";
import NavTabs from "./Nav-tabs.vue";
import { fullscreen } from "@/utils/utils";
import i18n from "@/locale";

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
        const unread = ref(true);
        let locale = "en";

        function changeLocale() {
            locale = locale === "en" ? "cn" : "en";
            i18n.global.locale.value = locale;
        }

        return {
            user,
            attrs,
            unread,
            fullscreen,
            changeLocale,
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
.i-unread:after {
    content: "\20";
    position: absolute;
    right: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f33;
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
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    opacity: 0;
    pointer-events: none;
    transform: translate(0, -4px);
    transition: var(--transition);
    background: var(--background);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 var(--radius) var(--radius);
}
.i-user {
    padding: 0;
    margin-left: 8px;
}
.i-avatar {
    width: 28px;
    height: 28px;
    background: #aaa;
    border-radius: var(--radius);
}
</style>
