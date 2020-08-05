// @ts-ignore
const fs = require('fs')
// @ts-ignore
const util = require('util')
// @ts-ignore
const path = require('path')
const write = util.promisify(fs.writeFile)
const writeFile = async (p, ...args) => await write(p, ...args)

module.exports.writeComponentFiles = async (
  compRoot,
  inputComponentName,
  welcomeImportName = null,
  useWelcome = false
) => {
  console.log('compRoot: ', compRoot)
  //
  // ──────────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E N   S T O R Y B O O K   F I L E : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────────
  //

  writeFile(
    path.join(compRoot, `${inputComponentName}.stories.tsx`),
    `import * as React from 'react';
  import { ${inputComponentName} } from './${inputComponentName}';\n
  
  export default { title: '${inputComponentName}' };
  
  export const ${inputComponentName}FirstStory = () => <${inputComponentName} />;
  `
  )

  //
  // ────────────────────────────────────────────────────────────────────────────────────────────────────── II ──────────
  //   :::::: G E N E R A T E   S T Y L E D   C O M P O N E N T S   F I L E : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  //

  writeFile(
    path.join(compRoot, `${inputComponentName}.styles.tsx`),
    `import * as React from 'react';
  import styled, { css } from 'styled-components';\n
  `
  )

  //
  // ────────────────────────────────────────────────────────────────────────── III ──────────
  //   :::::: G E N E R A T E   D O C   F I L E : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────────────
  //

  writeFile(
    path.join(compRoot, `${inputComponentName}.doc.mdx`),
    `import * as React from 'react';
    import { ${inputComponentName} } from './${inputComponentName}';\n
    <${inputComponentName} />
  `
  )

  //
  // ────────────────────────────────────────────────────────────────────────────────────── IV ──────────
  //   :::::: G E N   C O R E   C O M P O N E N T   F I L E : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────────────────────────
  //

  if (useWelcome) {
    writeFile(
      path.join(compRoot, `${inputComponentName}.tsx`),
      `import * as React from 'react';\n
import { ${inputComponentName} as Welcome${inputComponentName}} from '${welcomeImportName}';\n

export interface ${inputComponentName}Props  {
              
}
      
export const ${inputComponentName}: React.SFC<${inputComponentName}Props> = (props) => {
    return (
        <Welcome${inputComponentName} {...props} />
        
    );
}
      `
    )
    writeFile(
      path.join(compRoot, `index.tsx`),
      `export { ${inputComponentName} } from './${inputComponentName}';\n`
    )
  } else {
    writeFile(
      path.join(compRoot, `${inputComponentName}.tsx`),
      `import * as React from 'react';\n
  
  export interface ${inputComponentName}Props {
              
  }
  
  export const ${inputComponentName}: React.SFC<${inputComponentName}Props> = () => {
      return (
          <div>${inputComponentName}</div>
      );
  }`
    )
  }

  //
  // ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── V ──────────
  //   :::::: G E N E R A T E   I N D E X   F I L E   F O R   R O O T   C O M P O N E N T   E X P O R T : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  //
  if (!useWelcome) {
    writeFile(
      path.join(compRoot, `index.tsx`),
      `import * as React from 'react';\n
import { ${inputComponentName} as Welcome${inputComponentName} } from './${inputComponentName}';\n
export interface ${inputComponentName}Props {
          
}
export const ${inputComponentName}: React.SFC<${inputComponentName}Props> = (props) => {
  return (
      <Welcome${inputComponentName} {...props} />
  );
}`
    )
  }
}
