import React from 'react';
import MHIcon from './MHIcon';

const BarsIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <MHIcon {...props}>
      <g clipPath='url(#clip0_209_1060)'>
        <path
          d='M1.14286 5.87755H30.8571C31.4884 5.87755 32 5.29282 32 4.57143V1.30612C32 0.584735 31.4884 0 30.8571 0H1.14286C0.511643 0 0 0.584735 0 1.30612V4.57143C0 5.29282 0.511643 5.87755 1.14286 5.87755ZM7.54286 18.9388H24.5333C25.1645 18.9388 25.6762 18.354 25.6762 17.6327V14.3673C25.6762 13.646 25.1645 13.0612 24.5333 13.0612H7.54286C6.91164 13.0612 6.4 13.646 6.4 14.3673V17.6327C6.4 18.354 6.91164 18.9388 7.54286 18.9388ZM1.14286 32H30.8571C31.4884 32 32 31.4153 32 30.6939V27.4286C32 26.7072 31.4884 26.1225 30.8571 26.1225H1.14286C0.511643 26.1225 0 26.7072 0 27.4286V30.6939C0 31.4153 0.511643 32 1.14286 32Z'
          fill='inherit'
        />
      </g>
      <defs>
        <clipPath id='clip0_209_1060'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </MHIcon>
  );
};

export default BarsIcon;
