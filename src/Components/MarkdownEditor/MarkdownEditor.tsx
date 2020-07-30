import * as React from 'react';

import { MarkdownEditor as WelcomeMarkdownEditor} from '@welcome-ui/markdown-editor';


export interface MarkdownEditorProps  {
              
}
      
export const MarkdownEditor: React.SFC<MarkdownEditorProps> = (props) => {
    return (
        <WelcomeMarkdownEditor {...props} />
        
    );
}
      