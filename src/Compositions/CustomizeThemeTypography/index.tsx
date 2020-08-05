import * as React from 'react';

import { CustomizeThemeTypography as WelcomeCustomizeThemeTypography } from './CustomizeThemeTypography';

export interface CustomizeThemeTypographyProps {
          
}
export const CustomizeThemeTypography: React.SFC<CustomizeThemeTypographyProps> = (props) => {
  return (
      <WelcomeCustomizeThemeTypography {...props} />
  );
}