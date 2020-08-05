import * as React from 'react';

import { CustomizeTheme as WelcomeCustomizeTheme } from './CustomizeTheme';

export interface CustomizeThemeProps {
          
}
export const CustomizeTheme: React.SFC<CustomizeThemeProps> = (props) => {
  return (
      <WelcomeCustomizeTheme {...props} />
  );
}