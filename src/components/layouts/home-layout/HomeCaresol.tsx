'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const HomeCaresol = () => {
  return (
    <div className='h-full rounded-[3rem] overflow-hidden p-[2rem] outline-[1px] shadow-lg outline-gray-200 outline bg-primary-light/5'>
      <div className='relative w-full h-full rounded-[1rem] overflow-hidden'>
        <Image
          alt='Girl smilling with phone in hand'
          fill
          src={'/caresol-img-1.webp'}
        />
      </div>
      {/* <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className='w-full bg-red-200 h-full'
      >
        <SwiperSlide className='bg-blue-400 relative'>
          <Image
            alt='Girl smilling with phone in hand'
            fill
            src={'/caresol-img-1.webp'}
          />
        </SwiperSlide>
        <SwiperSlide className='bg-pink-400'>
          <div>2</div>
        </SwiperSlide>
        <SwiperSlide className='bg-yellow-400'>
          <div>3</div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default HomeCaresol;
