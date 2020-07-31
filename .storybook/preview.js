import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeDecorator } from './register'

addDecorator(ThemeDecorator)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
