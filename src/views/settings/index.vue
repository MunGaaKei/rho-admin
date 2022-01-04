<template>
    <div class="i-content">
        <h2>{{ t("routes.setting") }}</h2>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Settings",
    setup() {
        const { t } = useI18n();

        return {
            t,
        };
    },
});
</script>

<style scoped>
h2 {
    padding: 8px 12px;
}
</style>
