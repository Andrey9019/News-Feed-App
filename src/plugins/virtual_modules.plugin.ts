function virtualModules(strModules: string) {

    const modules = strModules.split(',') ;

    return{
        name: 'virtual:plugins',
        resolveId(id: string) {
            if (id==='virtual:plugins') {
                return id;
            }
            return null;
        },
        load(id: string) {
            if (id ==='virtual:plugins') {
                return modules.map(m => `import './src/modules/${m}.js'`).join('\n')
            }
            return null;
        }
    }
}

export default virtualModules;