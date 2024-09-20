import { DoubleTickIcon } from '@/assets/icons';
import React, { PropsWithChildren } from 'react';

type RecievedMessageProsp = { text: string };
export const RecievedMessage = ({ text }: RecievedMessageProsp) => {
  return (
    <div className='flex justify-start'>
      <div className='relative bg-white flex items-center justify-center px-[1rem] py-[0.5rem] text-semibold text-[0.875rem] shadow-paper1 rounded-[0.5rem] rounded-tl-[0] max-w-[500px]'>
        <p>
          {text}
          <span className='inline-block h-[1rem] min-w-[3.75rem]'></span>
        </p>
        <div className='absolute bottom-[0.25rem] right-[1rem] text-brand-gray-dark text-[0.75rem]'>
          12:00 am
        </div>
      </div>
    </div>
  );
};

type SentMessageProsp = { text: string };

export const SentMessage = ({ text }: SentMessageProsp) => {
  return (
    <div className='flex justify-end'>
      <div className='relative bg-primary-light flex items-center justify-center px-[1rem] py-[0.5rem] text-semibold text-[0.875rem] shadow-paper1 rounded-[0.5rem] rounded-tr-[0] max-w-[500px]'>
        <p>
          {text}{' '}
          <span className='inline-block h-[0.75rem] min-w-[4.4rem]'></span>
        </p>
        <div className='absolute bottom-[0.25rem] right-[1rem] text-brand-gray-dark text-[0.75rem] flex gap-[0.25rem] items-center'>
          <p>12:00 am</p>
          <DoubleTickIcon className='size-[0.75rem] fill-brand-gray-dark' />
        </div>
      </div>
    </div>
  );
};
