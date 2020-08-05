import * as React from 'react';

import { CustomizeThemePalette as WelcomeCustomizeThemePalette } from './CustomizeThemePalette';

export interface CustomizeThemePaletteProps {
          
}
export const CustomizeThemePalette: React.SFC<CustomizeThemePaletteProps> = (props) => {
  return (
      <WelcomeCustomizeThemePalette {...props} />
  );
}