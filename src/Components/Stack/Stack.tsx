import * as React from 'react'
import { Children, isValidElement, forwardRef } from 'react'
import { T_BaseComponentStyleProps } from '../component.types'
import { Box } from '@welcome-ui/box'

export interface StackProps extends T_BaseComponentStyleProps {
  direction?: string
  spacing?: string
  as?: string
  children?: any
  wrapChildren?: boolean
}

export const Stack: React.SFC<StackProps> = forwardRef(
  (
    {
      as = 'div',
      children,
      direction = 'column',
      spacing = 'md',
      wrapChildren = false,
      ...rest
    },
    ref
  ) => {
    const validChildrenArray = Children.toArray(children).filter(isValidElement)

    const marginType = direction === 'column' ? 'mb' : 'mr'

    return (
      <Box as={as} display='flex' flexDirection={direction} {...rest}>
        {validChildrenArray.map((child, i) => {
          const isLastChild = validChildrenArray.length === i + 1

          const childProps = {
            key: `stack-item-${i}`,
            [marginType]: isLastChild ? null : spacing
          }

          if (wrapChildren) {
            return <Box {...childProps}>{child}</Box>
          }
          return React.cloneElement(child, childProps)
        })}
      </Box>
    )
  }
)
