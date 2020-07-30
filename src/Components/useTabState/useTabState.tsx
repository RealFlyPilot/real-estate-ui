import * as React from 'react';

import { useTabState as WelcomeuseTabState} from '@welcome-ui/tabs';


export interface useTabStateProps  {
              
}
      
export const useTabState: React.SFC<useTabStateProps> = (props) => {
    return (
        <WelcomeuseTabState {...props} />
        
    );
}
      