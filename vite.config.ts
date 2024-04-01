import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {resolve} from "path"

const SrcPath = resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: "/",
    resolve: {
        alias: {
            "@": SrcPath,
        },
    },
    server: {
        host: "0.0.0.0",
        port: 8080,
        open: false,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
})
