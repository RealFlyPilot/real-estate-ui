import * as React from 'react';

import { Field as WelcomeField} from '@welcome-ui/field';


export interface FieldProps  {
              
}
      
export const Field: React.SFC<FieldProps> = (props) => {
    return (
        <WelcomeField {...props} />
        
    );
}
      