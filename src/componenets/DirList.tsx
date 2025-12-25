
const DirList = () => {
  return (
    <div className='dirlist-container'>
      <h2>Folders</h2>
        <ul className='dir-list'>
          {projectStructure.map((dir,i) => (
             <li key={i} className='dir-item'>
                    {dir.toString()}\
                </li>
          ))}
               
                
                
        </ul>
    </div>
  )
}

export default DirList

const projectStructure = [{
  src: {
    components: {
      atoms: {},
      molecules: {},
      organisms: {},
      templates: {},
      pages: {}
    },
    pages: {},
    hooks: {},
    contexts: {},
    services: {},
    utils: {},
    styles: {},
    assets: {
      images: {},
      fonts: {},
      icons: {}
    },
    lib: {
      tools: {},
      functions: {},
      constants: {},
      types: {}
    },
    routes: {},
    store: {},
    config: {}
  },
  public: {
    index: {},
    favicon: {},
    manifest: {}
  },
  tests: {
    unit: {},
    integration: {},
    e2e: {}
  },
  docs: {},
  scripts: {},
  dist: {},
  build: {},
  node_modules: {},
  '.git': {},
  '.vscode': {},
  '.github': {}
}];
