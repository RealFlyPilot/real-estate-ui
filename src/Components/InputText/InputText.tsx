import * as React from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { InputText as BaseInputText } from '@welcome-ui/input-text'
import { Stack } from '../Stack'
import { InputTextLabel } from './InputText.styles'

export interface InputTextProps extends T_BaseComponentStyleProps {
  type?: string
  name?: string
  placeholder?: string
  id?: string
  value?: string
  onChange?: Function
  ref?: any
  label?: any
  inline?: boolean
}

export const InputText: React.SFC<InputTextProps> = React.forwardRef(
  (props, ref) =>
    props.label ? (
      <Stack
        direction={props.inline ? 'row' : 'col'}
        alignItems='center'
        mb={8}
      >
        <InputTextLabel>{props.label}</InputTextLabel>{' '}
        <BaseInputText {...props} ref={ref} />
      </Stack>
    ) : (
      <BaseInputText {...props} ref={ref} />
    )
)
