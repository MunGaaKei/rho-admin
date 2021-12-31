import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const ENV = loadEnv(mode, __dirname);

    return {
        base: ENV.VITE_BASE_URL,
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
                [ENV.VITE_BASE_API_PATH]: {
                    target: ENV.VITE_BASE_API_HOST,
                    changeOrigin: true,
                    rewrite: (path) =>
                        path.replace(
                            new RegExp(`^${ENV.VITE_BASE_API_PATH}`),
                            ""
                        ),
                },
            },
        },
    };
});
