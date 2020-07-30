import * as React from 'react';

import { FileDrop as WelcomeFileDrop} from '@welcome-ui/file-drop';


export interface FileDropProps  {
              
}
      
export const FileDrop: React.SFC<FileDropProps> = (props) => {
    return (
        <WelcomeFileDrop {...props} />
        
    );
}
      