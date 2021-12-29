import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
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
