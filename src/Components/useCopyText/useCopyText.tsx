import * as React from 'react';

import { useCopyText as WelcomeuseCopyText} from '@welcome-ui/utils.copy';


export interface useCopyTextProps  {
              
}
      
export const useCopyText: React.SFC<useCopyTextProps> = (props) => {
    return (
        <WelcomeuseCopyText {...props} />
        
    );
}
      