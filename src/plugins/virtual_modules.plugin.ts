function virtualModules(strModules: string) {
    const modules = strModules.split(',');

    return{
        name: 'virtual-modules',
        resolveId(id: string) {
            if (id==='virtual:plugins') {
                return id;
            }
            return null;
        },
        load(id: string) {
            if (id ==='virtual:plugins') {
                return modules.map(m => `import './src/modules.${m}.ts;'`).join('\n')
            }
            return null;
        }
    }
}

export default virtualModules;