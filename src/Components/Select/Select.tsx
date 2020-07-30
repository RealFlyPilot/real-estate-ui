import * as React from 'react';

import { Select as WelcomeSelect} from '@welcome-ui/select';


export interface SelectProps  {
              
}
      
export const Select: React.SFC<SelectProps> = (props) => {
    return (
        <WelcomeSelect {...props} />
        
    );
}
      