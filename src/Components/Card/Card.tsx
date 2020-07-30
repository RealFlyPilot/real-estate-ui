import * as React from 'react';

import { Card as WelcomeCard} from '@welcome-ui/card';


export interface CardProps  {
              
}
      
export const Card: React.SFC<CardProps> = (props) => {
    return (
        <WelcomeCard {...props} />
        
    );
}
      