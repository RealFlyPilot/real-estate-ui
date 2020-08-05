import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeDecorator } from './register'
import { jsxDecorator } from 'storybook-addon-jsx'

addDecorator(jsxDecorator)
addDecorator(ThemeDecorator)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
