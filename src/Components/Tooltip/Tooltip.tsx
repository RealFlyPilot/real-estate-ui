import * as React from 'react';

import { Tooltip as WelcomeTooltip} from '@welcome-ui/tooltip';


export interface TooltipProps  {
              
}
      
export const Tooltip: React.SFC<TooltipProps> = (props) => {
    return (
        <WelcomeTooltip {...props} />
        
    );
}
      