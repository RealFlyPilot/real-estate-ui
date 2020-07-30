import * as React from 'react';

import { Textarea as WelcomeTextarea} from '@welcome-ui/textarea';


export interface TextareaProps  {
              
}
      
export const Textarea: React.SFC<TextareaProps> = (props) => {
    return (
        <WelcomeTextarea {...props} />
        
    );
}
      