import * as React from 'react';

import { Modal as WelcomeModal} from '@welcome-ui/modal';


export interface ModalProps  {
              
}
      
export const Modal: React.SFC<ModalProps> = (props) => {
    return (
        <WelcomeModal {...props} />
        
    );
}
      