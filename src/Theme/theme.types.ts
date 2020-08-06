export type T_PrimaryPalette = {
  100?: string
  200?: string
  500?: string
  700?: string
  800?: string
  900?: string
}
export type T_SuccessPalette = {
  100?: string
  200?: string
  500?: string
}
export type T_DangerPalette = {
  100?: string
  200?: string
  500?: string
  700?: string
}
export type T_WarningPalette = {
  100?: string
  200?: string
  500?: string
  700?: string
}
export type T_InfoPalette = {
  100?: string
  200?: string
  500?: string
}
export type T_LightPalette = {
  100?: string
  200?: string
  500?: string
  700?: string
  800?: string
  900?: string
}
export type T_DarkPalette = {
  100?: string
  200?: string
  500?: string
  700?: string
  800?: string
  900?: string
}
export type T_NudePalette = {
  100?: string
  200?: string
  500?: string
  700?: string
  800?: string
  900?: string
}
export type T_SubPalette = {
  1?: string
  2?: string
  3?: string
  4?: string
  5?: string
  6?: string
}

export type T_ThemeColors = {
  primary: T_PrimaryPalette
  success: T_SuccessPalette
  danger: T_DangerPalette
  warning: T_WarningPalette
  info: T_InfoPalette
  light: T_LightPalette
  dark: T_DarkPalette
  nude: T_NudePalette
  sub: T_SubPalette
  underline: string
  overlay: string
}

export type T_ThemeSpacing = {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  '3xl': string
  '4xl': string
}

export type T_TypographyElementKeys = {
  html?: number | string
  h0: number | string
  h1: number | string
  h2: number | string
  h3: number | string
  h4: number | string
  h5: number | string
  h6: number | string
  button?: number | string
  body1: number | string
  body2: number | string
  body3: number | string
  body4: number | string
  subtitle1: number | string
  subtitle2: number | string
  meta1: number | string
  meta2: number | string
}
export interface T_LetterSpacings extends T_TypographyElementKeys {
  sm: string
  md: string
  lg: string
}

export type T_SpaceKeys = {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  '3xl': string
  '4xl': string
}

export interface T_FontSizes extends T_TypographyElementKeys {
  button: string
}

export type T_BaseFonts = {
  texts: string
  headings: string
  icons: string
}

export type T_BaseTheme = {
  transformers: object
  colors: T_ThemeColors
  fontFaces: object
  fontSizes: T_TypographyElementKeys
  defaultLineHeight: number
  defaultLetterSpacing: number
  headingLineHeight: number
  headingLetterSpacing: number
  lineHeights: T_TypographyElementKeys
  fontWeights: {
    regular: string
    medium: string
    bold: string
  }
  letterSpacings: T_LetterSpacings
  fonts: T_BaseFonts
  borderWidths: {
    sm: string
    md: string
    lg: string
  }
  breakpoints: {
    xs: number // 0,
    sm: number // 480,
    md: number // 736,
    lg: number // 980,
    xl: number // 1280
  }
  space: T_SpaceKeys
  icons: object
  radii: object
  transitions: {
    slow: string
    medium: string
    fast: string
  }
  transitionCurves: object
  shadows: object
  selection: object
  underline: object
  defaultCards: object
  textsFontWeights: T_TypographyElementKeys
  textsFontFamily: object
  textsTextTransform: object
  alerts: object
  avatars: object
  buttons: object
  breadcrumbs: object
  toasts: object
  paginations: object
  tabs: object
  tags: object
  texts: object
  tooltips: object
  links: object
  dropdownMenu: object
  tables: object
  cards: object
  modals: object
  loaders: object
  accordions: object
  swipers: object
  labels: object
  defaultFields: object
  hints: object
  checkboxes: object
  toggles: object
  dateTimePickerCommon: object
  textareas: object
  filedrops: object
  radios: object
  radioTabs: object
}
