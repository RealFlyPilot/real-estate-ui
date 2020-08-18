// @ts-nocheck
import React from 'react'
import { Stack } from 'real-estate-ui'
import { CustomizeTheme } from '../Components/CustomizeTheme'
import { Header } from '../Components/Header.tsx'

export interface DashboardProps {}

export const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <Stack>
      <Header />
      <CustomizeTheme />
    </Stack>
  )
}
