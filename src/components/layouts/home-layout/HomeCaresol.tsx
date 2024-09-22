'use client';

import React from 'react';
import Image from 'next/image';
import { JoinWaitListSpecialButton } from '@/components/ui/Buttons';
import { isDesktop } from 'react-device-detect';
import { MImotion } from '@/components';

const fadeInAnimation = {
  initial: { y: '5rem', opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const HomeCaresol = () => {
  return (
    <section
      className={`w-full lg:my-[3rem] max-lg:py-[2rem] max-lg:h-[calc(100svh_-_5rem)]  ${
        isDesktop ? 'min-h-[50rem]' : 'landscape:min-h-[50rem]'
      }`}
    >
      <div className='lg:h-auto h-full md:rounded-[4.5rem] rounded-[3.5rem] overflow-hidden md:p-[2rem] p-[1rem] outline-[1px] shadow-lg outline-gray-200 outline bg-primary-light/5'>
        <div
          className='relative w-full lg:h-auto h-full rounded-[2.5rem] overflow-hidden lg:[--hero-image-padding:3rem]  [--hero-image-padding:1.5rem] lg:aspect-video lg:min-h-[40rem]
      re'
        >
          <Image
            alt='Girl smilling with phone in hand'
            fill
            src={'/hero-banner-image.webp'}
            objectFit='cover'
          />
          <div className='absolute z-[1] lg:top-[50%] lg:translate-y-[-50%] max-lg:bottom-[6rem] left-[--hero-image-padding] text-white max-lg:right-[--hero-image-padding]'>
            <div
              className={` ${
                isDesktop
                  ? 'md:text-[1.1rem] text-[1rem]'
                  : 'md:text-[1.1rem] text- text-[0.75em]'
              }`}
            >
              <MImotion.div className='max-lg:hidden font-semibold text-[4em] leading-[96%]'>
                Let’s not
                <br /> be Alone
              </MImotion.div>
              <MImotion.div className='lg:hidden font-semibold text-[3em] leading-[96%]'>
                Let’s not be Alone
              </MImotion.div>
              <MImotion.div
                className={`lg:text-[2.4em] ${
                  isDesktop ? 'text-[2.4rem]' : 'sm:text-[2rem] text-[1.5rem]'
                } leading-[96%]`}
              >
                Text somebody
              </MImotion.div>
              <MImotion.div className='mt-[2em] lg:max-w-[15em]'>
                But they don’t know who you are, where do you come from,
              </MImotion.div>
              <MImotion.div className='font-bold lg:max-w-[15em]'>
                So just text whatever you want.
              </MImotion.div>
            </div>
          </div>

          <div className='absolute z-[1] bottom-[--hero-image-padding] inset-x-[--hero-image-padding] w-auto flex justify-center'>
            <MImotion.div
              className='lg:max-w-[30rem] w-full h-[3.5rem] flex items-stretch'
              initial={{ y: '5rem', opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <JoinWaitListSpecialButton fullWidth>
                Join the waitlist
              </JoinWaitListSpecialButton>
            </MImotion.div>
          </div>
          <MImotion.div
            className='absolute z-[1] right-[--hero-image-padding] lg:top-[10rem] w-[35%] flex justify-center top-[--hero-image-padding]'
            initial={{ x: '5rem', opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <Image
              alt='Girl smilling with phone in hand'
              src={'/caresol-image-text.png'}
              width={100}
              height={100}
              className='h-auto w-full'
            />
          </MImotion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCaresol;
