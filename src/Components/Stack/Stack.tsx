import * as React from 'react';

import { Stack as WelcomeStack} from '@welcome-ui/stack';


export interface StackProps  {
              
}
      
export const Stack: React.SFC<StackProps> = (props) => {
    return (
        <WelcomeStack {...props} />
        
    );
}
      