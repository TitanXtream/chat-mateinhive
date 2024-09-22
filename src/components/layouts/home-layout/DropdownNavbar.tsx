import { CrossIcon } from '@/assets/icons';
import { Button, IconButton } from '@/components/ui/Buttons';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DropdownNavbar = ({ onClose }: { onClose: () => void }) => {
  // console.log('Menu Rendered');

  const router = useRouter();

  return (
    <div className='flex flex-col z-[10]'>
      <div className='flex flex-col divide-y-[1px] divide-brand-gray-light border-b-[1px] border-brand-gray-light'>
        <div className='container flex justify-between h-[5rem] items-center  gap-[1rem] '>
          <Link href={'/'} onClick={onClose}>
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
          <IconButton onClick={onClose}>
            <CrossIcon />
          </IconButton>
        </div>
        <div className='p-[1rem]'>
          <div className='max-w-[25rem] m-auto'>
            <Button
              fullWidth
              onClick={() => {
                onClose();
              }}
            >
              Join the wait list
            </Button>
          </div>
        </div>
        <DropNavMenuItem
          onClick={() => {
            onClose();
            router.push('how-it-works');
          }}
        >
          How it works
        </DropNavMenuItem>
        <DropNavMenuItem
          onClick={() => {
            onClose();
            router.push('our-goal');
          }}
        >
          Our Goal
        </DropNavMenuItem>
        <DropNavMenuItem
          onClick={() => {
            onClose();
            router.push('privacy');
          }}
        >
          Privacy
        </DropNavMenuItem>

        <DropNavMenuItem
          onClick={() => {
            onClose();
            router.push('contact-us');
          }}
        >
          Contact us
        </DropNavMenuItem>
      </div>
    </div>
  );
};

export default DropdownNavbar;

const DropNavMenuItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={() => {
        onClick?.();
      }}
      className='py-[1rem] hover:bg-brand-gray-extra-light/5'
    >
      {children}
    </button>
  );
};
