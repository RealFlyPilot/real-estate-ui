import * as React from 'react';

import { Alert as WelcomeAlert} from '@welcome-ui/alert';


export interface AlertProps  {
              
}
      
export const Alert: React.SFC<AlertProps> = (props) => {
    return (
        <WelcomeAlert {...props} />
        
    );
}
      