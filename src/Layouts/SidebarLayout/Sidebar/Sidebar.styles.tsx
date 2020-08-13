import * as React from 'react'
import styled, { system, css } from '@xstyled/styled-components'

export const SideBarElement: any = styled.asideBox`
  ${(props: any) => css({ width: props.width || '30%' })};
  ${system}
`
