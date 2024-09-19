import React, { ReactNode } from 'react';

const MHIcon = ({ children, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='#000'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      id='mh-icon-frame'
    >
      {children}
    </svg>
  );
};

export default MHIcon;
