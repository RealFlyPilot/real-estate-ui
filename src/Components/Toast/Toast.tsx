import * as React from 'react';

import { Toast as WelcomeToast} from '@welcome-ui/toast';


export interface ToastProps  {
              
}
      
export const Toast: React.SFC<ToastProps> = (props) => {
    return (
        <WelcomeToast {...props} />
        
    );
}
      