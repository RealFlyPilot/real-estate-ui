import * as React from 'react'
import { BaseComponentStylePropTypes } from '../../types/base.types'
import { Tab as BaseTabs, useTabState } from '@welcome-ui/tabs'

export interface TabProps extends BaseComponentStylePropTypes {
  as?: any
  children?: any
  id?: string
  orientation?: 'vertical' | 'horizontal'
  tabId?: string
}

const Tab: React.SFC<TabProps> = (props) => {
  return <BaseTabs {...props} />
}

// @ts-ignore
Tab.List = BaseTabs.List
// @ts-ignore
Tab.Panel = BaseTabs.Panel

export { useTabState, Tab }
