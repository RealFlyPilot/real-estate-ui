import * as React from 'react'
import { MainDiv } from './Main.styles'
import { T_BaseComponentStyleProps } from '../../../Components/component.types'

export interface MainProps extends T_BaseComponentStyleProps {
  children?: any
}

export const Main: React.SFC<MainProps> = ({ children, ...rest }) => {
  return <MainDiv {...rest}>{children}</MainDiv>
}
