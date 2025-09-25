import {defineConfig, loadEnv} from "vite";
// import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr"; // импорт SVG как React-компоненты
import checker from "vite-plugin-checker"; // проверка TS/ESLint в dev режиме
import viteCompression from "vite-plugin-compression"; // сжатие бандла Gzip/Brotli
import Inspect from "vite-plugin-inspect"; // инспекция плагинов

import biome from "vite-plugin-biome";
// import tailwindcss from "@tailwindcss/vite";
import virtualModules, {virtualPlugins} from "./src/plugins/virtual_modules.plugin";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    const modules = ["auth", "feedParser"];

    return {
        plugins: [
            // react(),
            // tailwindcss(),
            virtualModules(env.VITE_TEST),
            tsconfigPaths(),
            svgr(),
            // checker(),
            viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
            Inspect(),
            biome(),
        ],
        build: {
            minify: "terser",
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        }
    };
});