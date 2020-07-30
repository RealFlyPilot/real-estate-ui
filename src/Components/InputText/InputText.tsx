import * as React from 'react';

import { InputText as WelcomeInputText} from '@welcome-ui/input-text';


export interface InputTextProps  {
              
}
      
export const InputText: React.SFC<InputTextProps> = (props) => {
    return (
        <WelcomeInputText {...props} />
        
    );
}
      