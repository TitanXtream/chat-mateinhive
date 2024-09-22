import { Button } from '@/components/ui/Buttons';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-[2rem] bg-gray-900 text-white'>
      <div className='container'>
        <div className='py-[2rem] flex sm:flex-row flex-col max-sm:items-center gap-[4rem] max-sm:text-center'>
          <div className='flex flex-col gap-[2rem]'>
            <Image
              src={'/long-logo-footer.svg'}
              alt={'logo'}
              width={100}
              height={100}
              className='max-w-[15rem] h-auto w-auto overflow-hidden'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
              placeholder='blur'
              loading='lazy'
            />
            <div className='mt-[2rem] max-sm:hidden lg:hidden'>
              If you have any concerns reguarding our service or your privacy
              mail us on:{' '}
              <a
                href='mailto:abc@gmail.com'
                className='inline text-blue-300 hover:underline'
              >
                mailto:abc@gmail.com
              </a>
            </div>
          </div>
          <div className='max-w-[30rem] w-full flex flex-col items-stretch gap-[2rem]'>
            <p>
              Connect anonymously and share your thoughts in a safe space. Find
              a listening ear whenever you need it.
            </p>
            <Button>Join the Waitlist</Button>
          </div>

          <div className='max-w-[22rem] sm:max-lg:hidden'>
            <div className='font-bold text-[0.75rem] text-white/80'>
              Need Help? contact us
            </div>
            <div className='mt-[2rem] '>
              If you have any concerns reguarding our service or your privacy
              mail us on:{' '}
              <a
                href='mailto:abc@gmail.com'
                className='inline text-blue-300 hover:underline'
              >
                mailto:abc@gmail.com
              </a>
            </div>
            <div className='flex gap-[1rem] sm:hidden justify-center mt-[2rem]'>
              <SocialMediaButton imgUrl='/instagram.png' />
              <SocialMediaButton imgUrl='/facebook-f.png' />
            </div>
          </div>
        </div>
        <div className='py-[2rem] border-t-[1px] border-t-gray-500 flex justify-between items-end'>
          <p className='max-sm:text-center'>
            &copy; copyright - 2024 . created and maintained by Tamojit and Team
          </p>
          <div className='flex gap-[1rem] max-sm:hidden'>
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
