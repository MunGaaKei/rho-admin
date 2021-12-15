import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteComponents({
            customComponentResolvers: [AntDesignVueResolver()],
        }),
    ],
    resolve: {
        alias: {
            "~": resolve(__dirname, "./"),
            "@": resolve(__dirname, "./src"),
        },
    },
    server: {
        open: true,
        proxy: {
            "/api": {
                target: "http://[server_url]/",
                changeOrigin: true,
                rewrite: ({ replace }) => replace(/^\/api/, ""),
            },
        },
    },
});
