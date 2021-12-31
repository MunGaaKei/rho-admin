<template>
    <div class="content">
        <template v-if="loading">
            <n-space vertical>
                <n-skeleton text style="width: 200px" />
                <n-skeleton text style="width: 100px" />
            </n-space>
        </template>
        <h3 v-else>WELCOME! {{ username }} : )</h3>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { NSkeleton, NSpace } from "naive-ui";

export default defineComponent({
    name: "Home",
    components: {
        NSkeleton,
        NSpace,
    },
    setup() {
        const Store = useStore();
        const loading = ref(true);

        const username = Store.state.user.name;

        setTimeout(() => {
            loading.value = false;
        }, 1000);

        return {
            loading,
            username,
        };
    },
});
</script>

<style scoped>
.content {
    padding: 20px;
}
</style>
