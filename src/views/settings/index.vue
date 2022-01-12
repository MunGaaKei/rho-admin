<template>
    <div class="i-content" ref="container$">
        <div class="i-settings-header" :class="{ 'i-form-changed': changed }">
            <n-button
                :bordered="false"
                quaternary
                round
                size="small"
                @click="handleCancle"
            >
                {{ t("settings.cancle") }}
            </n-button>
            <n-button
                type="primary"
                round
                strong
                :loading="loading"
                @click="handleSubmit"
            >
                {{ t("settings.save") }}
            </n-button>
        </div>

        <n-form
            ref="form$"
            :label-placement="labelPlacement"
            label-width="200"
            class="i-settings-form"
            @change="handleFormChange"
        >
            <n-form-item :label="t('settings.theme_setting')">
                <n-radio-group v-model:value="FormData.theme">
                    <n-space>
                        <n-radio
                            v-for="o in options.theme"
                            :key="o.value"
                            :value="o.value"
                        >
                            {{ t(o.label) }}
                        </n-radio>
                    </n-space>
                </n-radio-group>
            </n-form-item>
        </n-form>
    </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, onUnmounted } from "vue";
import {
    NForm,
    NFormItem,
    NInput,
    NSwitch,
    NRadio,
    NRadioGroup,
    NButton,
    NSpace,
} from "naive-ui";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Settings",
    setup() {
        const { t } = useI18n();
        const form$ = ref(null);
        const container$ = ref(null);
        const options = reactive({
            theme: [
                { value: "light", label: "settings.theme_light" },
                { value: "dark", label: "settings.theme_dark" },
                { value: "auto", label: "settings.auto" },
            ],
        });
        const changed = ref(false);
        const loading = ref(false);
        const labelPlacement = ref("left");
        const FormData = getRawFormData();

        onMounted(() => {
            handleResize();
            window.addEventListener("resize", handleResize);
        });

        onUnmounted(() => {
            window.removeEventListener("resize", handleResize);
        });

        function handleResize() {
            if (container$.value.offsetWidth < 720) {
                labelPlacement.value = "top";
            } else {
                labelPlacement.value = "left";
            }
        }

        function getRawFormData() {
            return reactive({
                theme: "light",
            });
        }

        function handleFormChange() {
            changed.value = true;
        }

        function handleCancle() {
            changed.value = false;
            Object.assign(FormData, getRawFormData());
            form$.value.restoreValidation();
        }

        function handleSubmit() {
            loading.value = true;
            changed.value = false;
            form$.value.restoreValidation();
            loading.value = false;
        }

        return {
            FormData,
            options,
            changed,
            loading,
            labelPlacement,
            t,
            handleFormChange,
            handleCancle,
            handleSubmit,
            form$,
            container$,
        };
    },
    components: {
        NForm,
        NFormItem,
        NInput,
        NSwitch,
        NRadio,
        NRadioGroup,
        NButton,
        NSpace,
    },
});
</script>

<style scoped lang="scss">
.i-settings-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    background: var(--background-opacity);
    backdrop-filter: blur(8px);
    transition: var(--transition);
    transform: translate(0, -4px);
    opacity: 0;
    &.i-form-changed {
        transform: none;
        opacity: 1;
    }
    > .n-button:first-child {
        margin: 0 8px 0 auto;
    }
}
.i-settings-form {
    padding: 40px 12px;
    :deep(.n-form-item-label) {
        margin-right: 20px;
    }
}
</style>
