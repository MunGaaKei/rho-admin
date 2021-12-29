<template>
    <div class="content">
        <template v-if="loading">
            <n-skeleton text :repeat="1" />
            <n-skeleton text style="width: 60%" />
        </template>
        <h3 v-else>WELCOME {{ username }} : )</h3>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { NSkeleton } from "naive-ui";

export default defineComponent({
    name: "Home",
    components: {
        NSkeleton,
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
