function virtualModules(strModules: string) {
const trimmedStrModules = strModules ? strModules.trim() : "";
const modules = trimmedStrModules ? trimmedStrModules.split(',').map(m => m.trim()).filter(Boolean) : [];
return {
name: 'virtual:plugins',
resolveId(id: string) {
if (id === 'virtual:plugins') {
return id;
}
return null;
},
load(id: string) {
if (id === 'virtual:plugins') {
return modules.map(m => `import './src/modules/${m}.js';`).join('\n') || "// No valid modules found";
}
return null;
}
};
}
export default virtualModules;