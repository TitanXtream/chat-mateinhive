'use client';

import React, { useRef } from 'react';
import { MHmotion } from '@/components';

const SubHeroSection = () => {
  const sectionRef = useRef(null);
  return (
    <MHmotion.section
      ref={sectionRef}
      className='w-full flex flex-col gap-[2rem] md:pt-[10rem] pb-[5rem] pt-[5rem] px-[1rem] items-center'
    >
      <MHmotion.h1
        initial={{ opacity: 0, y: '5rem' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-40%', root: sectionRef }}
        className='font-bold text-[3rem] text-center'
      >
        Feeling lonely?
      </MHmotion.h1>
      <MHmotion.p
        className='lg:max-w-[50rem] max-w-[24.5rem] text-center text-[1.5rem] max-lg:text-justify'
        initial={{ opacity: 0, y: '5rem' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-30%', root: sectionRef }}
      >
        Connect with someone new and anonymous to share your thoughts freely.
        Whether it's things you wouldn't tell friends or family, our app offers
        a safe space to open up and feel heard.{' '}
        <strong>Join us, and find a listening ear whenever you need one</strong>
      </MHmotion.p>
    </MHmotion.section>
  );
};

export default SubHeroSection;
