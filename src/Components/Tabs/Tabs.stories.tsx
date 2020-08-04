import * as React from 'react'
import { Tab, useTabState } from './Tabs'

export default { title: 'Components|Tabs', component: Tab }

export const Example = () => {
  const tab = useTabState({ selectedId: 'tab1' })

  return (
    <>
      <Tab.List aria-label='Tabs' {...tab}>
        <Tab {...tab} as='a' id='tab1'>
          Tab 1
        </Tab>
        <Tab {...tab} as='a' id='tab2'>
          Tab 2
        </Tab>
        <Tab {...tab} as='a' id='tab3'>
          Tab 3
        </Tab>
      </Tab.List>
      <Tab.Panel {...tab} tabId='tab1'>
        Tab.Panel 1
      </Tab.Panel>
      <Tab.Panel {...tab} tabId='tab2'>
        Tab.Panel 2
      </Tab.Panel>
      <Tab.Panel {...tab} tabId='tab3'>
        Tab.Panel 3
      </Tab.Panel>
    </>
  )
}
