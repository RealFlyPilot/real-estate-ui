import * as React from 'react';

import { Table as WelcomeTable} from '@welcome-ui/table';


export interface TableProps  {
              
}
      
export const Table: React.SFC<TableProps> = (props) => {
    return (
        <WelcomeTable {...props} />
        
    );
}
      