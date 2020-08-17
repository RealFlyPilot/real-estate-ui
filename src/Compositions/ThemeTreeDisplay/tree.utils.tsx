import { T_BaseTheme } from '../../Theme/theme.types'

export type T_ThemeTreeChildInstance = {
  name: string
  toggled: boolean
  children: { name: string }[]
}

export type T_ThemeTreeChild = {
  name: string
  toggled: boolean
  children: T_ThemeTreeChildInstance[]
}
export type T_Tree = {
  name: 'theme'
  toggled: boolean
  children: T_ThemeTreeChild[]
}

export const isObjectWithChildren = (obj: object) =>
  typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length

export const theChildrenHaveChildren = (obj: object) =>
  Object.keys(obj).some((key) => isObjectWithChildren(obj[key]))

export const extractChildrenInTreeFormat = (obj: object) => {
  const children: any = Object.keys(obj).map((key) => {
    const child = obj[key]
    const childFormat = {
      name: key,
      toggled: false,
      children: isObjectWithChildren(child)
        ? extractChildrenInTreeFormat(child)
        : [
            {
              name: obj[key]
            }
          ]
    }
    return childFormat
  })
  return children
}

export const formatThemeTree = (theme: T_BaseTheme) => {
  if (!isObjectWithChildren(theme)) {
    return false
  }

  const tree: T_Tree = {
    name: 'theme',
    toggled: true,
    children: []
  }

  Object.keys(theme).forEach((topLevelThemeKey) => {
    const treeHasThisChild = tree.children.find(
      (child) => child && child.name === topLevelThemeKey
    )
    if (!treeHasThisChild) {
      const proto = {
        name: topLevelThemeKey,
        toggled: false,
        children: []
      }
      const objChild = theme[topLevelThemeKey]

      if (isObjectWithChildren(objChild)) {
        proto.children = extractChildrenInTreeFormat(objChild)
      }
      tree.children.push(proto)
    }
  })

  return { tree }
}
