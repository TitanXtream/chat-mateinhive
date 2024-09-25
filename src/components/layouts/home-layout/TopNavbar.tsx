'use client';

import { BarsIcon } from '@/assets/icons';
import { Button, IconButton } from '@/components/ui/Buttons';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, Suspense, useState } from 'react';

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { signIn } from 'next-auth/react';

const DropdownNavbar = dynamic(() => import('./DropdownNavbar'));

const TopNavbar = () => {
  // const { setUser } = useAuthContext();
  // const { loginWithPopup } = useAuth0();
  const [navMenuIsOpenned, setNavMenuIsOpenned] = useState(false);
  return (
    <>
      <motion.nav
        initial={{
          y: '-100%',
        }}
        animate={{
          y: '0',
        }}
        className='container relative h-full flex justify-between items-center w-full gap-[1rem] backdrop-blur-md bg-canvas-dark/60'
      >
        <Link href={'/'}>
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
        </Link>

        <ul className='lg:flex hidden gap-[3rem]'>
          <li>
            <Navlink href={'/how-it-works'}>How it works</Navlink>
          </li>
          <li className=''>
            <Navlink href={'/our-goal'}>Our Goal</Navlink>
          </li>
          <li className=''>
            <Navlink href={'/privacy'}>Privacy</Navlink>
          </li>

          <li>
            <Navlink href={'/contact-us'}>Contact us</Navlink>
          </li>
        </ul>
        <div className='max-lg:hidden'>
          <Button
            // as='a'
            // href='/api/auth/login'
            onClick={() => {
              // setUser({ name: 'AGH123#456L' });
              // loginWithPopup();
              signIn('facebook');
            }}
          >
            login
          </Button>
        </div>
        {/* <MenuButton as={IconButton}>Hi</MenuButton> */}
        <div className='lg:hidden'>
          <IconButton onClick={() => setNavMenuIsOpenned(true)}>
            <BarsIcon />
          </IconButton>
        </div>
      </motion.nav>
      <Dialog
        onClose={() => setNavMenuIsOpenned(false)}
        transition
        open={navMenuIsOpenned}
        className={
          'fixed inset-0 w-full h-svh bg-white z-[20]  transition duration-300 ease-out data-[closed]:translate-x-[100%] data-[closed]:opacity-0'
        }
      >
        <Suspense fallback={<LoadingSpinner />}>
          <DropdownNavbar onClose={() => setNavMenuIsOpenned(false)} />
        </Suspense>
      </Dialog>
    </>
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
