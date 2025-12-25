
const DirList = () => {
  return (
    <div className='dirlist-container'>
      <h2>Folders</h2>
        <ul className='dir-list'>
          {projectStructure.map((dir,i) => (
             <li key={i} className='dir-item'>
                    {dir}
                </li>
          ))}
               
                
                
        </ul>
    </div>
  )
}

export default DirList

const projectStructure = [
  'src/components/atoms',
  'src/components/molecules',
  'src/components/organisms',
  'src/components/templates',
  'src/components/pages',
  'src/pages',
  'src/hooks',
  'src/contexts',
  'src/services',
  'src/utils',
  'src/styles',
  'src/assets/images',
  'src/assets/fonts',
  'src/assets/icons',
  'src/lib/tools',
  'src/lib/functions',
  'src/lib/constants',
  'src/lib/types',
  'src/routes',
  'src/store',
  'src/config',
  'public/index',
  'public/favicon',
  'public/manifest',
  'tests/unit',
  'tests/integration',
  'tests/e2e',
  'docs',
  'scripts',
  'dist',
  'build',
  'node_modules',
  '.git',
  '.vscode',
  '.github'
];
