import * as React from 'react';

import { Tabs as WelcomeTabs} from '@welcome-ui/tabs';


export interface TabsProps  {
              
}
      
export const Tabs: React.SFC<TabsProps> = (props) => {
    return (
        <WelcomeTabs {...props} />
        
    );
}
      