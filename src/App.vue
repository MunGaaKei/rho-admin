<script setup>
import Global from "@/components/Global.vue";
import { NDialogProvider } from "naive-ui";
</script>

<template>
    <Global>
        <n-dialog-provider>
            <router-view />
        </n-dialog-provider>
    </Global>
</template>
