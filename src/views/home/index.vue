<template>
    <div class="content">
        <template v-if="loading">
            <n-space vertical>
                <n-skeleton text style="width: 200px" />
                <n-skeleton text style="width: 100px" />
            </n-space>
        </template>
        <h3 v-else>{{ t("common.welcome") }}! {{ username }} : )</h3>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { NSkeleton, NSpace } from "naive-ui";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Home",
    components: {
        NSkeleton,
        NSpace,
    },
    setup() {
        const Store = useStore();
        const loading = ref(true);
        const { t } = useI18n();

        const username = Store.state.user.name;

        setTimeout(() => {
            loading.value = false;
        }, 100);

        return {
            loading,
            username,
            t,
        };
    },
});
</script>

<style scoped>
.content {
    padding: 20px;
}
</style>
