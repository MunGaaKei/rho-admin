<template>
    <div class="content">
        <div class="header">
            <h3>{{ t("common.hi") }}, {{ name }}</h3>
        </div>
        <p>
            <a @click="handleLogOut">
                {{ cancelable ? t("common.confirm") : t("common.signout") }}
            </a>
            <template v-if="cancelable">
                ,
                <a @click="cancleLogOut" style="opacity: 0.6">
                    {{ t("common.cancel") }}
                </a>
            </template>
        </p>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { mapState } from "@/store/mapStore";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "User",
    setup() {
        const Store = useStore();
        const Router = useRouter();
        const { t } = useI18n();

        let cancelable = ref(false);

        function handleLogOut() {
            if (cancelable.value) {
                Store.commit("user/USER_LOGOUT");
                Router.push("/login");
            } else {
                cancelable.value = true;
            }
        }

        function cancleLogOut() {
            cancelable.value = false;
        }

        return {
            cancelable,
            ...mapState(Store.state.user, ["name"]),
            handleLogOut,
            cancleLogOut,
            t,
        };
    },
});
</script>

<style lang="scss" scoped>
.content {
    padding: 20px;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
