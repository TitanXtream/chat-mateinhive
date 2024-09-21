'use client';

import { PropsWithChildren } from 'react';
import { isMobileOnly } from 'react-device-detect';

const Heading = ({
  children,
  varient = 'large',
}: PropsWithChildren & { varient?: 'large' | 'small' }) => {
  return (
    <h1
      className={`leading-[110%] mb-[0.5rem] ${
        isMobileOnly
          ? varient === 'large'
            ? 'text-[2.75rem] font-bold'
            : 'text-[2rem] font-medium'
          : varient === 'large'
          ? 'text-[3.5rem] font-bold'
          : 'text-[2.5rem] font-medium'
      }`}
    >
      {children}
    </h1>
  );
};
export default Heading;
