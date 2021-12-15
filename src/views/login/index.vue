<script setup>
import { reactive } from "vue";
import { UserLogin } from "@/api/user";
import { useStore } from "vuex";

const store = useStore();

const formState = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const submit = () => {
    UserLogin(formState).then((res) => {
        console.log(res);
    });
};
</script>
<template>
    <div class="container">
        <a-form :model="formState" class="form">
            <a-form-item>
                <a-input v-model="formState.username" placeholder="用户名">
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-model="formState.password" placeholder="密码" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" @click="submit"
                    >登陆</a-button
                >
            </a-form-item>
        </a-form>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    height: 100%;
    .form {
        margin: auto;
        width: 400px;
        max-width: 100%;
    }
}
</style>
