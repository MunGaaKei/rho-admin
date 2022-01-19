<template>
    <div class="i-container">
        <n-form
            :model="formState"
            :rules="rules"
            class="i-form"
            label-placement="left"
        >
            <h1>{{ APP_NAME }}</h1>
            <n-form-item path="username">
                <n-input
                    v-model:value="formState.username"
                    :placeholder="t('common.username')"
                    :input-props="{ autocomplete: 'off' }"
                ></n-input>
            </n-form-item>
            <n-form-item path="password">
                <n-input
                    v-model:value="formState.password"
                    type="password"
                    :placeholder="t('common.password')"
                    :input-props="{ autocomplete: 'off' }"
                ></n-input>
            </n-form-item>
            <n-form-item>
                <p class="i-form-msg"></p>
                <n-button
                    v-if="!ON_PERMISSION"
                    quaternary
                    style="margin: 0 12px 0 0"
                    @click="handleCancel"
                >
                    {{ t("common.cancel") }}
                </n-button>
                <n-button
                    type="primary"
                    attr-type="submit"
                    :loading="loading"
                    @click="handleSubmit"
                    :disabled="invalidForm()"
                    style="width: 120px"
                >
                    {{ t("common.sign_in") }}
                </n-button>
            </n-form-item>
        </n-form>
    </div>
</template>

<script>
import { ref, reactive, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { NForm, NFormItem, NInput, NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
import { APP_NAME, ON_PERMISSION } from "@/settings.js";
import Message from "@/components/message";

export default defineComponent({
    setup() {
        const Store = useStore();
        const Router = useRouter();
        const { t } = useI18n();
        const formState = reactive({
            username: "admin",
            password: "admin",
        });
        const rules = {
            username: {
                required: true,
                trigger: "blur",
                message: "",
            },
            password: {
                required: true,
                trigger: "blur",
                message: "",
            },
        };
        let loading = ref(false);

        async function handleSubmit() {
            loading.value = true;

            const { code, msg } = await Store.dispatch("user/LOGIN", formState);

            switch (code) {
                case 200:
                    Router.push("/");
                    break;
                case 1:
                case 2:
                    Message(`😖   ${msg}`);
                    formState.password = "";
                    break;
                default:
                    break;
            }

            loading.value = false;
        }

        function invalidForm() {
            let { username, password } = formState;
            return username === "" || password === "";
        }

        function handleCancel() {
            Router.push("/");
        }

        return {
            APP_NAME,
            ON_PERMISSION,
            loading,
            formState,
            rules,
            handleSubmit,
            handleCancel,
            invalidForm,
            t,
        };
    },
    components: {
        NForm,
        NFormItem,
        NInput,
        NButton,
    },
});
</script>

<style lang="scss" scoped>
.i-container {
    background: var(--background-secondary);
}
.i-form {
    box-sizing: border-box;
    margin: auto;
    padding: 12px 24px;
    width: 360px;
    max-width: 100%;
    border-radius: var(--radius);
    background: var(--background);
    h1 {
        margin-bottom: 24px;
    }
}
.i-form-msg {
    margin-right: auto;
}
</style>
