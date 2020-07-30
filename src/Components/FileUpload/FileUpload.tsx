import * as React from 'react';

import { FileUpload as WelcomeFileUpload} from '@welcome-ui/file-upload';


export interface FileUploadProps  {
              
}
      
export const FileUpload: React.SFC<FileUploadProps> = (props) => {
    return (
        <WelcomeFileUpload {...props} />
        
    );
}
      