import * as React from 'react';

import { Toggle as WelcomeToggle} from '@welcome-ui/toggle';


export interface ToggleProps  {
              
}
      
export const Toggle: React.SFC<ToggleProps> = (props) => {
    return (
        <WelcomeToggle {...props} />
        
    );
}
      