import { CrossIcon } from '@/assets/icons';
import { Button, IconButton } from '@/components/ui/Buttons';
// import { Button } from '@headlessui/react';
import Image from 'next/image';
import React, { PropsWithChildren, ReactNode } from 'react';

const DropdownNavbar = ({ onClose }: { onClose: () => void }) => {
  console.log('Menu Rendered');

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col divide-y-[1px] divide-brand-gray-light border-b-[1px] border-brand-gray-light'>
        <div className='flex justify-between h-[5rem] items-center px-[1rem] gap-[1rem] '>
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
          }}
        >
          Our Goal
        </DropNavMenuItem>
        <DropNavMenuItem
          onClick={() => {
            onClose();
          }}
        >
          Privacy
        </DropNavMenuItem>
        <DropNavMenuItem
          onClick={() => {
            onClose();
          }}
        >
          How it works
        </DropNavMenuItem>
        <DropNavMenuItem
          onClick={() => {
            onClose();
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
