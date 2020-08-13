import { configure, addDecorator } from '@storybook/react'
import { ThemeDecorator, ToastDecorator } from './register'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withA11y } from '@storybook/addon-a11y'

// Storybook: React Theme Provider
import { withThemes } from '@react-theming/storybook-addon'

// Welcome UI Theme Provider
import { WuiProvider } from '@welcome-ui/core'

// Themes
import { welcomeTheme } from '../src/Theme/welcome.theme'
import { baseTheme } from '../src/Theme/base.theme'

addDecorator(jsxDecorator)
addDecorator(ThemeDecorator)
addDecorator(withA11y)
addDecorator(withThemes(WuiProvider, [welcomeTheme, baseTheme]))
addDecorator(ToastDecorator)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
