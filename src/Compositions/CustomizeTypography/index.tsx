import * as React from 'react';

import { CustomizeTypography as WelcomeCustomizeTypography } from './CustomizeTypography';

export interface CustomizeTypographyProps {
          
}
export const CustomizeTypography: React.SFC<CustomizeTypographyProps> = (props) => {
  return (
      <WelcomeCustomizeTypography {...props} />
  );
}