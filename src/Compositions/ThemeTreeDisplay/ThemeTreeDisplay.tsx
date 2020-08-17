import React, { useState } from 'react'
// @ts-ignore
import { Treebeard } from 'react-treebeard'
import { formatThemeTree } from './tree.utils'
import { treeStyle } from './tree.style'
import { T_BaseTheme } from '../../Theme/theme.types'

export interface ThemeTreeDisplayProps {
  customTheme: T_BaseTheme
}

export const ThemeTreeDisplay: React.SFC<ThemeTreeDisplayProps> = ({
  customTheme
}) => {
  const { tree }: any = formatThemeTree(customTheme)

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

  return <Treebeard style={treeStyle} data={data} onToggle={onToggle} />
}
