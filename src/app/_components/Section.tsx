'use client';

import Image from 'next/image';
import React, { ReactNode, useRef } from 'react';
import { isMobileOnly } from 'react-device-detect';
import { MHmotion } from '@/components';

const fadeInUpAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
const Section = ({
  children,
  title,
  imageUrl,
}: {
  children: ReactNode;
  imageUrl: string;
  title: string;
}) => {
  const sectionRef = useRef(null);

  return (
    // <section className='w-full flex sm:odd:flex-row sm:even:flex-row odd:flex-col even:flex-col-reverse md:gap-[6rem] gap-[4rem] md:py-[10rem] py-[5rem] lg:px-[5rem] items-center'>
    //   {children}
    // </section>
    <MHmotion.section
      ref={sectionRef}
      className='w-full flex sm:odd:flex-row sm:even:flex-row-reverse
     odd:flex-col even:flex-col md:gap-[6rem] gap-[4rem] md:py-[10rem] py-[5rem] lg:px-[5rem] items-center'
    >
      <MHmotion.div
        {...fadeInUpAnimation}
        viewport={{ once: true, margin: '-20%', root: sectionRef }}
        className='h-auto sm:w-auto w-[12rem] shrink-0'
      >
        <Image
          alt='chatting page image'
          src={imageUrl}
          height={100}
          width={100}
          sizes='100vw'
          className='h-auto  w-full drop-shadow-md'
        />
      </MHmotion.div>
      <MHmotion.div
        {...fadeInUpAnimation}
        viewport={{ once: true, margin: '-30%', root: sectionRef }}
        className={`flex flex-col max-sm:items-center ${
          isMobileOnly ? 'text-[1rem] gap-[1rem]' : 'text-[1.5rem] gap-[2rem]'
        }`}
      >
        <h1
          className={`font-bold ${
            isMobileOnly ? 'text-[2rem]' : 'text-[3rem]'
          } sm:text-start text-center`}
        >
          {title}
        </h1>

        {children}
      </MHmotion.div>
    </MHmotion.section>
  );
};

export default Section;
