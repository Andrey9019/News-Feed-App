import { existsSync } from "node:fs";
import { resolve } from "node:path";

function virtualModules() {
  const modules = [];
  debugger;
  const modules1 = import.meta.env;

  console.log("VITE_MODULES2:", modules1?.VITE_MODULES);

  return {
    name: "virtual:plugins",
    resolveId(id: string): "virtual:plugins" | null {
      if (id === "virtual:plugins") {
        return id;
      }
      return null;
    },
    load(id: string): string | null {
      if (id === "virtual:plugins") {
        const validModules = modules?.filter((module) => {
          const modulePath = resolve(__dirname, `src/modules/${module}.js`);
          const exists = existsSync(modulePath);
          console.log(
            `[virtual-modules] Checking module: ${modulePath}, Exists: ${exists}`
          );
          if (!exists) {
            console.log(
              `[virtual-modules] Module not found: src/modules/${module}.js`
            );
          }
          return exists;
        });

        console.log("modules:", modules);
        console.log("[virtual-modules] Valid moduless:", validModules);

        const imports = validModules
          .map((m) => `import './src/modules/${m}.js';`)
          .join("\n");
        return imports || "// No valid modules found";
      }
      return null;
    },
  };
}

export default virtualModules;
