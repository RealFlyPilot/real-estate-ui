import * as React from 'react';

import { Link as WelcomeLink} from '@welcome-ui/link';


export interface LinkProps  {
              
}
      
export const Link: React.SFC<LinkProps> = (props) => {
    return (
        <WelcomeLink {...props} />
        
    );
}
      