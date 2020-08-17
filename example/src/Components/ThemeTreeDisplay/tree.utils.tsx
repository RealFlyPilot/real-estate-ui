import { T_BaseTheme } from '../../../../dist/Theme/theme.types'

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

export const extractChildrenInTreeFormat = (obj: object, keepOpen = false) => {
  const nestedChildren: any = Object.keys(obj).map((key) => {
    const child = obj[key]
    const children: any = isObjectWithChildren(child)
      ? extractChildrenInTreeFormat(child)
      : [
          {
            name: obj[key]
            // toggled: true // keepOpen
          }
        ]
    const childFormat = {
      name: key,
      toggled: true, //isObjectWithChildren(child) && keepOpen ? keepOpen : false,
      children
    }
    return childFormat
  })
  return nestedChildren
}

export const themeKeyCustomizationIsAllowed = (
  currentKey: string,
  allowedCustomizationKeys: object
) => Object.keys(allowedCustomizationKeys).includes(currentKey)

export const formatThemeTree = (
  theme: T_BaseTheme,
  allowedCustomizationKeys: object = {},
  keepOpen = false
) => {
  const fullCustomizationAllowed =
    Object.keys(allowedCustomizationKeys).length === 0
  if (!isObjectWithChildren(theme)) {
    return false
  }

  const tree: T_Tree = {
    name: 'theme',
    toggled: true,
    children: []
  }

  Object.keys(theme).forEach((topLevelThemeKey) => {
    if (
      fullCustomizationAllowed ||
      themeKeyCustomizationIsAllowed(topLevelThemeKey, allowedCustomizationKeys)
    ) {
      const treeHasThisChild = tree.children.find(
        (child) => child && child.name === topLevelThemeKey
      )
      if (!treeHasThisChild) {
        const proto = {
          name: topLevelThemeKey,
          toggled: true,
          children: []
        }
        const objChild = theme[topLevelThemeKey]

        if (isObjectWithChildren(objChild)) {
          proto.children = extractChildrenInTreeFormat(objChild, keepOpen)
        }
        tree.children.push(proto)
      }
    }
  })

  return { tree }
}
