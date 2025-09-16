const modules: string[] = [];

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
        return modules
          .map((m: any): string => `import './src/modules/${m}.ts';`)
          .join("\n");
      }
      return null;
    },
  };
}
export default virtualModules;
