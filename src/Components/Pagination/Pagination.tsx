import * as React from 'react';

import { Pagination as WelcomePagination} from '@welcome-ui/pagination';


export interface PaginationProps  {
              
}
      
export const Pagination: React.SFC<PaginationProps> = (props) => {
    return (
        <WelcomePagination {...props} />
        
    );
}
      