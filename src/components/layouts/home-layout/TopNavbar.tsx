'use client';

import { Button } from '@/components/ui/Buttons';
import { useAuthContext } from '@/features/AuthenticationProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const TopNavbar = () => {
  const { setUser } = useAuthContext();
  return (
    <nav className='container flex gap-[1rem] justify-between h-full items-center'>
      {/* <Image
        src={'/long-logo.svg'}
        alt={'logo'}
        layout='responsive'
        width={100}
        height={100}
        // sizes='1vw'
        style={{
          maxHeight: '3rem',
          maxWidth: 'max-containt',
        }}
        className='flex max-h-[3rem] max-w-fit'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
        placeholder='blur'
        loading='lazy'
      /> */}

      <img src='/long-logo.svg' className='h-full max-h-[3rem]' />

      <ul className='flex gap-[3rem]'>
        <li className=''>
          <Navlink href={'/privacy'}>Privacy</Navlink>
        </li>
        <li>
          <Navlink href={'/help-center'}>Help Center</Navlink>
        </li>
      </ul>
      <Button
        onClick={() => {
          setUser({ name: 'AGH123#456L' });
        }}
      >
        login
      </Button>
    </nav>
  );
};

export default TopNavbar;

const Navlink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link href={href} className='flex flex-col items-center group'>
      <div>{children}</div>
      <div className='h-[2px] w-[0] bg-primary rounded-full mt-[0.25rem] group-hover:w-full transition-[width] duration-500 ease-in-out'></div>
    </Link>
  );
};
