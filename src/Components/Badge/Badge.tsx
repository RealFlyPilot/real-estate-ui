import * as React from 'react';

import { Badge as WelcomeBadge} from '@welcome-ui/badge';


export interface BadgeProps  {
              
}
      
export const Badge: React.SFC<BadgeProps> = (props) => {
    return (
        <WelcomeBadge {...props} />
        
    );
}
      