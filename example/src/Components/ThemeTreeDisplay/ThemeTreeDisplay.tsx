import React, { useState } from 'react'
// @ts-ignore
import { Treebeard } from 'react-treebeard'
import { formatThemeTree } from './tree.utils'
import { useThemeContext } from '../../Context/ThemeProvider'
import { treeStyle } from './tree.style'

export interface ThemeTreeDisplayProps {
  allowedCustomizationKeys?: object
}

export const ThemeTreeDisplay: React.SFC<ThemeTreeDisplayProps> = ({
  allowedCustomizationKeys = {}
}) => {
  const { customTheme } = useThemeContext()
  const { tree }: any = formatThemeTree(customTheme, allowedCustomizationKeys)

  const [data, setData]: any = useState(tree)
  const [cursor, setCursor]: any = useState(null)

  const onToggle = (node: any, toggled: boolean) => {
    if (cursor) {
      cursor.active = false
    }
    node.active = true
    if (node.children) {
      node.toggled = toggled
    }
    setCursor(node)
    setData(Object.assign({}, data))
  }

  React.useEffect(() => {
    const { tree: newTree }: any = formatThemeTree(
      customTheme,
      allowedCustomizationKeys,
      true
    )
    setData(newTree)
  }, [customTheme])

  return <Treebeard style={treeStyle} data={data} onToggle={onToggle} />
}
