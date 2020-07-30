import * as React from 'react';

import { RadioTab as WelcomeRadioTab} from '@welcome-ui/radio-tab';


export interface RadioTabProps  {
              
}
      
export const RadioTab: React.SFC<RadioTabProps> = (props) => {
    return (
        <WelcomeRadioTab {...props} />
        
    );
}
      