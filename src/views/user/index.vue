<template>
    <div class="content">
        <div class="header">
            <h3>Hi, {{ name }}</h3>
            <n-button-group>
                <n-button
                    strong
                    secondary
                    size="small"
                    type="error"
                    @click="handleLogOut"
                >
                    {{ text_logout }}
                </n-button>
                <n-button
                    v-show="cancelable"
                    @click="cancleLogOut"
                    secondary
                    size="small"
                >
                    {{ text_cancel }}
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

export default defineComponent({
    name: "User",
    components: {
        NButton,
        NButtonGroup,
    },
    setup() {
        const Store = useStore();
        const Router = useRouter();

        let text_logout = ref("注销");
        let text_cancel = ref("取消");
        let cancelable = ref(false);

        function handleLogOut() {
            if (cancelable.value) {
                Store.commit("user/USER_LOGOUT");
                Router.push("/login");
            } else {
                text_logout.value = "确认";
                cancelable.value = true;
            }
        }

        function cancleLogOut() {
            text_logout.value = "注销";
            cancelable.value = false;
        }

        return {
            text_logout,
            text_cancel,
            cancelable,
            ...mapState(Store.state.user, ["name"]),
            handleLogOut,
            cancleLogOut,
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
