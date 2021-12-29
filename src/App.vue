<script setup>
import Global from "@/components/Global.vue";
import { NMessageProvider } from "naive-ui";
</script>

<template>
    <Global>
        <n-message-provider>
            <router-view />
        </n-message-provider>
    </Global>
</template>
