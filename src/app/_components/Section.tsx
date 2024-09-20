import React, { ReactNode } from 'react';

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className='w-full flex sm:odd:flex-row sm:even:flex-row odd:flex-col even:flex-col-reverse md:gap-[6rem] gap-[4rem] md:py-[10rem] py-[5rem] lg:px-[5rem] items-center'>
      {children}
    </section>
  );
};

export default Section;
