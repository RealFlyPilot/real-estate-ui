import * as React from 'react';

import { Swiper as WelcomeSwiper} from '@welcome-ui/swiper';


export interface SwiperProps  {
              
}
      
export const Swiper: React.SFC<SwiperProps> = (props) => {
    return (
        <WelcomeSwiper {...props} />
        
    );
}
      