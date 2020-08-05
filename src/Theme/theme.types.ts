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
