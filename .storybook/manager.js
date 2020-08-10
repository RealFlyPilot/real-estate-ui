import * as React from 'react'
import { addons } from '@storybook/addons'
import storybookTheme from './theme'
import { useParameter } from '@storybook/api'
import { AddonPanel } from '@storybook/components'

import { BugForm } from '../src/Services/clubhouse/BugForm'

export const ADDON_ID = 'storybook/bugreport'
export const PARAM_KEY = 'bugReport'
export const PANEL_ID = `${ADDON_ID}/panel`

export const BugPanel = () => {
  const value = useParameter(PARAM_KEY, null)
  const item = value ? value.data : ''
  console.log('item: ', item)
  const emit = useChannel({
    STORY_RENDERED: (id) => {
      return (
        <AddonPanel>
          <BugForm />
        </AddonPanel>
      )
    },
    'my/customEvent': () => {
      return (
        <AddonPanel>
          <BugForm />
        </AddonPanel>
      )
    }
  })
  return (
    <AddonPanel>
      <BugForm />
    </AddonPanel>
  )
}

addons.register(ADDON_ID, (api) => {
  const render = ({ active, key }) => <BugPanel />
  const title = 'Bug Report'

  addons.addPanel(PANEL_ID, {
    title,
    render,
    paramKey: PARAM_KEY
  })
})

addons.setConfig({
  theme: storybookTheme
})
