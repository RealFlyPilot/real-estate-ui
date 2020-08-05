import * as React from 'react'

export interface CustomizeThemeProps {
  theme: any
}

export const CustomizeTheme: React.SFC<CustomizeThemeProps> = ({ theme }) => {
  console.log('theme: ', theme)
  return <div>CustomizeTheme</div>
}
