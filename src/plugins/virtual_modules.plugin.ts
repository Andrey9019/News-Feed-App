import { existsSync } from "node:fs";
import { resolve } from "node:path";

const modules: string[] = ["auth", "feedParser"];

function virtualModules() {
  return {
    name: "virtual-modules",
    resolveId(id: string): "virtual:plugins" | null {
      if (id === "virtual:plugins") {
        return id;
      }
      return null;
    },
    load(id: string): string | null {
      if (id === "virtual:plugins") {
        const validModules = modules.filter((module) => {
          const modulePath = resolve(__dirname, `src/modules/${module}.ts`);
          const exists = existsSync(modulePath);
          if (!exists) {
            console.warn(
              `[virtual-modules] Module not found: src/modules/${module}.ts`
            );
          }
          return exists;
        });
        const imports = validModules
          .map((m: string): string => `import './src/modules/${m}.ts';`)
          .join("\n");
        return imports || "// No valid modules found";
      }
      return null;
    },
  };
}
export default virtualModules;
