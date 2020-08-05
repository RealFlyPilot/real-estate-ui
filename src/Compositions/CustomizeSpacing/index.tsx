import * as React from 'react';

import { CustomizeSpacing as WelcomeCustomizeSpacing } from './CustomizeSpacing';

export interface CustomizeSpacingProps {
          
}
export const CustomizeSpacing: React.SFC<CustomizeSpacingProps> = (props) => {
  return (
      <WelcomeCustomizeSpacing {...props} />
  );
}