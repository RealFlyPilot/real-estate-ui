import * as React from 'react';

import { RadioGroup as WelcomeRadioGroup} from '@welcome-ui/radio-group';


export interface RadioGroupProps  {
              
}
      
export const RadioGroup: React.SFC<RadioGroupProps> = (props) => {
    return (
        <WelcomeRadioGroup {...props} />
        
    );
}
      