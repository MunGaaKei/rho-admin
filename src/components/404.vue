<script setup>
import { NResult, NButton, NSpace } from "naive-ui";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const Router = useRouter();
const { t } = useI18n();

function returnBack() {
    Router.go(-1);
}
</script>
<template>
    <div class="i-container">
        <n-result status="404" title="404" style="margin: auto">
            <template #footer>
                <n-space>
                    <n-button @click="Router.push('/')" secondary>
                        {{ t("routes.home") }}
                    </n-button>
                    <n-button @click="returnBack" type="primary">
                        {{ t("common.back") }}
                    </n-button>
                </n-space>
            </template>
        </n-result>
    </div>
</template>
