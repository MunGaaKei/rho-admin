<template>
    <div class="content">
        <div class="header">
            <h3>{{ t("common.hi") }}, {{ name }}</h3>
            <n-button-group>
                <n-button
                    strong
                    secondary
                    size="small"
                    type="error"
                    @click="handleLogOut"
                >
                    {{ cancelable ? t("common.confirm") : t("common.signout") }}
                </n-button>
                <n-button
                    v-show="cancelable"
                    @click="cancleLogOut"
                    secondary
                    size="small"
                >
                    {{ t("common.cancel") }}
                </n-button>
            </n-button-group>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { NButton, NButtonGroup } from "naive-ui";
import { mapState } from "@/store/mapStore";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "User",
    components: {
        NButton,
        NButtonGroup,
    },
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
