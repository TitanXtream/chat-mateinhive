'use client';

import { Button } from '@/components/ui/Buttons';
import { useAuthContext } from '@/features/AuthenticationProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const TopNavbar = () => {
  const { setUser } = useAuthContext();
  return (
    <nav className='container relative h-full flex justify-between items-center w-full'>
      <Image
        src={'/long-logo.svg'}
        alt={'logo'}
        width={100}
        height={100}
        className='max-h-[3rem] h-auto w-auto overflow-hidden'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
        placeholder='blur'
        loading='lazy'
      />

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
