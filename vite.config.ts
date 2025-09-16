import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";
// import svgr from "vite-plugin-svgr"; // импорт SVG как React-компоненты
// import checker from "vite-plugin-checker"; // проверка TS/ESLint в dev режиме
// import viteCompression from "vite-plugin-compression"; // сжатие бандла Gzip/Brotli
// import Inspect from "vite-plugin-inspect"; // инспекция плагинов
// import { visualizer } from "rollup-plugin-visualizer"; // анализ бандла
// import { terser } from "terser"; // минификация кода
// import virtualModules from "./src/plugins/virtual_modules.plugin";
// import biome from "vite-plugin-biome";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     virtualModules(),
//     tsconfigPaths(),
//     svgr(),
//     checker({
//       typescript: true,
//     }),
//     viteCompression({
//       algorithm: "brotliCompress",
//       ext: ".br",
//     }),
//     Inspect(),
//     biome(),
//   ],
//   build: {
//     minify: false,
//     rollupOptions: {
//       plugins: [
//         visualizer({
//           filename: "stats.html",
//           open: true,
//         }),
//         {
//           ...terser({
//             format: { comments: false },
//             compress: {
//               drop_console: true,
//               drop_debugger: true,
//             },
//           }),
//           name: "rollup-plugin-terser",
//         },
//       ],
//     },
//   },
// });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
