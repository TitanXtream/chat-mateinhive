'use client';

import Image from 'next/image';
import React, { ReactNode } from 'react';
import { isMobileOnly } from 'react-device-detect';

const Section = ({
  children,
  title,
  imageUrl,
}: {
  children: ReactNode;
  imageUrl: string;
  title: string;
}) => {
  return (
    // <section className='w-full flex sm:odd:flex-row sm:even:flex-row odd:flex-col even:flex-col-reverse md:gap-[6rem] gap-[4rem] md:py-[10rem] py-[5rem] lg:px-[5rem] items-center'>
    //   {children}
    // </section>
    <section
      className='w-full flex sm:odd:flex-row sm:even:flex-row-reverse
     odd:flex-col even:flex-col md:gap-[6rem] gap-[4rem] md:py-[10rem] py-[5rem] lg:px-[5rem] items-center'
    >
      <Image
        alt='chatting page image'
        src={imageUrl}
        layout='resposive'
        height={100}
        width={100}
        sizes='100vw'
        className='h-auto sm:w-auto w-[12rem] drop-shadow-md'
      />
      <div
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
      </div>
    </section>
  );
};

export default Section;
