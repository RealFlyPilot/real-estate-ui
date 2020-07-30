import * as React from 'react';

import { Picker as WelcomePicker} from '@welcome-ui/picker';


export interface PickerProps  {
              
}
      
export const Picker: React.SFC<PickerProps> = (props) => {
    return (
        <WelcomePicker {...props} />
        
    );
}
      