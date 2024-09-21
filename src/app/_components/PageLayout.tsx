import React, { PropsWithChildren } from 'react';

const PageLayout = ({ children }: PropsWithChildren) => {
  return <div className='py-[2rem] flex flex-col gap-[1rem]'>{children}</div>;
};

export default PageLayout;
