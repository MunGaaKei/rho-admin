<template>
    <div class="i-container">
        <n-form
            :model="formState"
            :rules="rules"
            class="form"
            label-placement="left"
        >
            <h1>{{ APP_NAME }}</h1>
            <n-form-item path="username">
                <n-input
                    v-model:value="formState.username"
                    placeholder="Username"
                    :input-props="{ autocomplete: 'off' }"
                ></n-input>
            </n-form-item>
            <n-form-item path="password">
                <n-input
                    v-model:value="formState.password"
                    type="password"
                    placeholder="Password"
                    :input-props="{ autocomplete: 'off' }"
                ></n-input>
            </n-form-item>
            <n-form-item>
                <n-button
                    type="primary"
                    attr-type="submit"
                    :loading="loading"
                    @click="handleSubmit"
                    :disabled="invalidForm()"
                    style="margin-left: auto; width: 120px"
                >
                    登陆
                </n-button>
            </n-form-item>
        </n-form>
    </div>
</template>

<script>
import { ref, reactive, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { NForm, NFormItem, NInput, NButton, useMessage } from "naive-ui";
import { APP_NAME } from "@/settings.js";

export default defineComponent({
    setup() {
        const Store = useStore();
        const Router = useRouter();
        const Message = useMessage();
        const formState = reactive({
            username: "",
            password: "",
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
                    formState.password = "";
                    Message.error(msg);
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

        return {
            APP_NAME,
            loading,
            formState,
            rules,
            handleSubmit,
            invalidForm,
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
    background: #eee;
}
.form {
    box-sizing: border-box;
    margin: auto;
    padding: 12px 24px;
    width: 320px;
    max-width: 100%;
    border-radius: var(--radius);
    background: #fff;
    h1 {
        margin-bottom: 24px;
    }
}
</style>
