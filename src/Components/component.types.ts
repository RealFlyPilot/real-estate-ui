export type T_Directions = 'row' | 'container' | 'column'

export type T_Inputs = [
  | 'checkbox'
  | 'email'
  | 'file'
  | 'password'
  | 'radio'
  | 'search'
  | 'tel'
  | 'text'
]

export type OPTIONS_TYPE = {
  label: number | string
  value: number | string
}

export type T_Shapes = 'square' | 'circle'

export type T_Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type T_StatusVariant = 'error' | 'info' | 'success' | 'valid' | 'warning'

export type T_NumericVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primary-warning'
  | 'secondary-warning'
  | 'primary-danger'
  | 'secondary-danger'

export type T_BaseComponentStyleProps = {
  m?: string | number
  mt?: string | number
  mr?: string | number
  mb?: string | number
  ml?: string | number
  mx?: string | number
  my?: string | number
  p?: string | number
  pt?: string | number
  pr?: string | number
  pb?: string | number
  pl?: string | number
  px?: string | number
  py?: string | number
  space?: string | number
  display?: string | number
  width?: string | number
  height?: string | number
  maxWidth?: any
  maxHeight?: any
  minWidth?: string | number
  minHeight?: any
  size?: string | number
  verticalAlign?: string | number
  layout?: string | number
  row?: string | number
  col?: string | number
  fontFamily?: string | number | null
  fontSize?: string | number
  lineHeight?: string | number
  fontWeight?: string | number
  fontStyle?: string | number
  textAlign?: string | number
  letterSpacing?: string | number
  color?: string | number
  textTransform?: string | number
  typography?: string | number
  alignItems?: string | number
  alignContent?: string | number
  justifyContent?: string | number
  justifyItems?: string | number
  flexWrap?: string | number
  flexBasis?: string | number
  flexDirection?: string | number
  flex?: string | number
  justifySelf?: string | number
  alignSelf?: string | number
  order?: string | number
  flexboxes?: string | number
  gridGap?: string | number
  gridColumnGap?: string | number
  gridRowGap?: string | number
  gridColumn?: string | number
  gridRow?: string | number
  gridAutoFlow?: string | number
  gridAutoColumns?: string | number
  gridAutoRows?: string | number
  gridTemplateColumns?: string | number
  gridTemplateRows?: string | number
  gridTemplateAreas?: string | number
  gridArea?: string | number
  background?: string | number
  bg?: string | number
  backgroundImage?: string | number
  backgroundSize?: string | number
  backgroundPosition?: string | number
  backgroundColor?: string | number
  backgroundRepeat?: string | number
  padding?: string | number
  border?: string | number
  borderTop?: string | number
  borderTopColor?: string | number
  borderRight?: string | number
  borderRightColor?: string | number
  borderBottom?: string | number
  borderBottomColor?: string | number
  borderLeft?: string | number
  borderLeftColor?: string | number
  borderColor?: string | number
  borderWidth?: string | number
  borderStyle?: string | number
  borderRadius?: string | number
  boxShadow?: string | number
  textShadow?: string | number
  opacity?: string | number
  overflow?: string | number
  transition?: string | number
  position?: string
  zIndex?: string | number
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  positioning?: string | number
  style?: object
  ref?: any
}
