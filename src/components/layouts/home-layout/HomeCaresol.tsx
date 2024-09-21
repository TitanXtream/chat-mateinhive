'use client';

import React from 'react';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import { JoinWaitListSpecialButton } from '@/components/ui/Buttons';
// import { Button } from '@/components/ui/Buttons';

const HomeCaresol = () => {
  return (
    <div className='lg:h-auto h-full md:rounded-[4.5rem] rounded-[3.5rem] overflow-hidden md:p-[2rem] p-[1rem] outline-[1px] shadow-lg outline-gray-200 outline bg-primary-light/5'>
      <div
        className='relative w-full lg:h-auto h-full rounded-[2.5rem] overflow-hidden lg:[--hero-image-padding:3rem]  [--hero-image-padding:1.5rem] lg:aspect-video lg:min-h-[40rem]
      re'
      >
        <Image
          alt='Girl smilling with phone in hand'
          fill
          // layout='responsive'
          src={'/caresol-img-1.jpg'}
          objectFit='cover'
          // width={100}
          // height={100}
          // className='w-full h-full'
        />
        <div className='absolute z-[1] top-[50%] translate-y-[-50%] left-[--hero-image-padding] bg-red-500 text-white'>
          <div className='md:text-[1.1rem] text-[1em]'>
            <div className='font-semibold text-[4em] leading-[96%]'>
              Let’s not
              <br className='max-lg:' /> be Alone
            </div>
            <div className='text-[2.4em] leading-[96%]'>Text somebody</div>
            <div className='mt-[2em] md:max-w-[15em]'>
              But they don’t know who you are, where do you come from,
            </div>
            <div className='font-bold md:max-w-[15em]'>
              So just text whatever you want.
            </div>
          </div>
        </div>
        {/* <div className='absolute z-[1] top-1 left-[1] bg-transparent'>
          <JoinWaitListSpecialButton>
            Join the wait list
          </JoinWaitListSpecialButton>
        </div> */}
        <div className='absolute z-[1] bottom-[--hero-image-padding] inset-x-[--hero-image-padding] w-auto flex justify-center'>
          <div className='lg:max-w-[30rem] w-full h-[3.5rem] flex items-stretch'>
            <JoinWaitListSpecialButton fullWidth>
              Join the wait list
            </JoinWaitListSpecialButton>
          </div>
        </div>
        <div className='absolute z-[1] right-[--hero-image-padding] lg:top-[10rem] w-[35%] flex justify-center top-[--hero-image-padding]'>
          {/* --hero-image-padding */}
          <Image
            alt='Girl smilling with phone in hand'
            // fill

            src={'/caresol-image-text.png'}
            width={100}
            height={100}
            className='h-auto w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCaresol;
// w-[calc(100%_-_var(--hero-image-padding))]
