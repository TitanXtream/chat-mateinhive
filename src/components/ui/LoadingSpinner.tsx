import React, { PropsWithChildren } from 'react';

const LoadingSpinner = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-[0.5rem]'>
      <div className='size-[4rem] rounded-[50%] border-[4px] border-x-primary border-t-primary-dark border-b-transparent animate-spin'></div>
      <p className='text-[0.75rem] text-primary'>{children}</p>
    </div>
  );
};

export default LoadingSpinner;
