import { configure, addDecorator } from '@storybook/react'
import { ThemeDecorator } from './register'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withThemes } from '@react-theming/storybook-addon'
import { welcomeTheme } from '../src/Theme/welcome.theme'
import { WuiProvider } from '@welcome-ui/core'
import { baseTheme } from '../src/Theme/base.theme'

addDecorator(jsxDecorator)
addDecorator(ThemeDecorator)
addDecorator(withThemes(WuiProvider, [welcomeTheme, baseTheme]))

configure(require.context('../src', true, /\.stories\.tsx$/), module)
