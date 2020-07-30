import * as React from 'react';

import { Loader as WelcomeLoader} from '@welcome-ui/loader';


export interface LoaderProps  {
              
}
      
export const Loader: React.SFC<LoaderProps> = (props) => {
    return (
        <WelcomeLoader {...props} />
        
    );
}
      