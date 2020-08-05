// @ts-ignore
const fs = require('fs')
// @ts-ignore
const mkdir = require('mkdirp')
// @ts-ignore
const path = require('path')
const rimraf = require('rimraf')
const { writeComponentFiles } = require('./write-component')
const workspaces = ['Compositions', 'Views', 'Components', 'Hooks', 'Services']

// Arguments
let isComponent = false
const inputComponentName = process.argv[2]
const isComposition = process.argv[3] && process.argv[3] === '--composition'
const isView = process.argv[3] && process.argv[3] === '--view'
const isCustom = process.argv[3] && process.argv[3] === '--custom'

let deleteIt =
  (process.argv[3] && process.argv[3] === '--remove') ||
  (process.argv[4] && process.argv[4] === '--remove')

if (!isView && !isComposition && !isCustom) {
  if (process.argv[3] && process.argv[3] === '--remove') {
    process.argv[3] = '--component'
    process.argv[4] = '--remove'
    deleteIt = true
  }
  isComponent = true
}

const workspace = isComposition
  ? workspaces[0]
  : isView
  ? workspaces[1]
  : isComponent
  ? workspaces[2]
  : null

// Paths
const rootPath = path.join(__dirname, `../../src/${workspace}`)
const compRoot = path.join(rootPath, inputComponentName)

if (deleteIt && fs.existsSync(compRoot)) {
  rimraf(compRoot, function (error) {
    console.log('Error: ', error)
  })
} else {
  if (fs.existsSync(compRoot)) {
    console.error('Component already exists.')
    // @ts-ignore
    return
  }
}
mkdir.sync(compRoot)

writeComponentFiles(compRoot, inputComponentName, null, null).then(() =>
  console.log('meh')
)
