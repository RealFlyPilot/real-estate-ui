import * as React from 'react'

import { Tabs as BaseTabs } from '@welcome-ui/tabs'

export interface TabsProps {}

export const Tabs: React.SFC<TabsProps> = (props) => {
  return <BaseTabs {...props} />
}
