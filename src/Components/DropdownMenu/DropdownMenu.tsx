import * as React from 'react';

import { DropdownMenu as WelcomeDropdownMenu} from '@welcome-ui/dropdown-menu';


export interface DropdownMenuProps  {
              
}
      
export const DropdownMenu: React.SFC<DropdownMenuProps> = (props) => {
    return (
        <WelcomeDropdownMenu {...props} />
        
    );
}
      