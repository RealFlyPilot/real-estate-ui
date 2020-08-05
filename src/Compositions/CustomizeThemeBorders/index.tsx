import * as React from 'react';

import { CustomizeThemeBorders as WelcomeCustomizeThemeBorders } from './CustomizeThemeBorders';

export interface CustomizeThemeBordersProps {
          
}
export const CustomizeThemeBorders: React.SFC<CustomizeThemeBordersProps> = (props) => {
  return (
      <WelcomeCustomizeThemeBorders {...props} />
  );
}