<script setup>
import Global from "@/components/Global.vue";
import { NMessageProvider, NDialogProvider } from "naive-ui";
</script>

<template>
    <Global>
        <n-dialog-provider>
            <n-message-provider>
                <router-view />
            </n-message-provider>
        </n-dialog-provider>
    </Global>
</template>
