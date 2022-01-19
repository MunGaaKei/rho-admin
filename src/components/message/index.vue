<template>
    <div class="rho-messages">
        <div
            v-for="msg in messages"
            :key="msg.key"
            :class="{ 'rho-active': msg.show }"
            :style="msg.style"
            @click="msg.handleClick"
            class="rho-message"
            v-html="msg.html"
        ></div>
    </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
    props: {
        messages: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        return {
            ...toRefs(props),
        };
    },
});
</script>

<style lang="scss" scoped>
.rho-messages {
    position: absolute;
    right: 12px;
    top: 12px;
    height: 0;
    z-index: 100;
}
.rho-message {
    display: flex;
    align-items: center;
    white-space: pre;
    margin-bottom: 12px;
    padding: 8px 12px;
    background: var(--background);
    color: var(--color);
    border-radius: var(--radius);
    transition: var(--transition);
    box-shadow: var(--shadow);
    opacity: 0;
    transform: translate(50%, 0) scale(0.86) skew(-40deg);
    &.rho-active {
        opacity: 1;
        transform: translate(0, 0);
    }
}
</style>
