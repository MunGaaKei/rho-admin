import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const ENV = loadEnv(mode, __dirname);

    return {
        base: ENV.VITE_BASE_URL,
        plugins: [
            vue(),
            vueI18n({
                compositionOnly: false,
                include: resolve(__dirname, "./src/locale/lang/*"),
            }),
        ],
        resolve: {
            alias: {
                "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
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
