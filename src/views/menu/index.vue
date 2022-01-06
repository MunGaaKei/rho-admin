<template>
    <router-beta></router-beta>
</template>

<script>
import { defineComponent } from "vue";
import RouterBeta from "@/components/Router-beta.vue";

export default defineComponent({
    name: "Menu",
    components: {
        RouterBeta,
    },
    setup() {},
});
</script>
