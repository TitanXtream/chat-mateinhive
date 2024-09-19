import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-[2rem] bg-gray-900 text-white'>
      <div className='container'>
        <div className='py-[2rem] flex gap-[4rem]'>
          <div className='h-[2rem] w-max'>
            <Image
              src={'/long-logo-footer.svg'}
              alt={'logo'}
              layout='responsive'
              width={100}
              height={100}
              sizes='100vh'
              className='max-h-full'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
              placeholder='blur'
              loading='lazy'
            />
          </div>
          <div className='max-w-[22rem]'>
            <div className='font-bold text-[0.75rem] text-white/80'>
              Our Goal
            </div>
            <p className='mt-[2rem]'>
              Feeling lonely? Our app connects you with someone new, someone you
              don’t know—so you can share your thoughts without hesitation.
              Whether it's things you wouldn't tell friends or family, we're
              here to give you a safe space to open up and feel heard. Join us,
              and find a listening ear whenever you need one
            </p>
          </div>
          <div className='max-w-[22rem]'>
            <div className='font-bold text-[0.75rem] text-white/80'>
              Need Help? contact us
            </div>
            <div className='flex flex-col mt-[2rem] gap-[1rem]'>
              <p>Email</p>
              <p>Phone</p>
            </div>
          </div>
        </div>
        <div className='py-[2rem] border-t-[1px] border-t-gray-500 flex justify-between items-end'>
          <p>
            &copy; copyright - 2024 . created and maintained by Tamojit and Team
          </p>
          <div className='flex gap-[1rem]'>
            <SocialMediaButton imgUrl='/instagram.png' />
            <SocialMediaButton imgUrl='/facebook-f.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialMediaButton = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <button className='relative size-[3rem] group overflow-hidden rounded-[1rem] [--duration:700ms]'>
      <div className='relative z-[2] w-full h-full flex items-center justify-center p-[0.75rem] rounded-[1rem] border-[1.5px] border-white/20 hover:border-white transition-colors duration-[--duration]'>
        <Image
          src={imgUrl}
          alt={'logo'}
          layout='responsive'
          width={100}
          height={100}
          sizes='100vh'
          className='max-h-full'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
          placeholder='blur'
          loading='lazy'
        />
      </div>
      <div className='absolute w-[180%] h-[180%] rounded-full bg-primary z-[1] inset-0 translate-x-[60%] group-hover:translate-x-[-40%] transition transform duration-[--duration] ease-in-out'></div>
    </button>
  );
};
