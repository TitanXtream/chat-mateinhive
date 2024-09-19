import React, { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className='w-full flex sm:flex-row flex-col md:gap-[6rem] gap-[4rem] md:py-[10rem] p-[5rem] items-center'>
      {children}
    </section>
  );
};

export default Section;
