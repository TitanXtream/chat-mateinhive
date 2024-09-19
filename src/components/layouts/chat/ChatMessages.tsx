import React, { PropsWithChildren } from 'react';

type RecievedMessageProsp = {} & PropsWithChildren;
export const RecievedMessage = ({ children }: RecievedMessageProsp) => {
  return (
    <div className='sticky top-0 flex justify-center'>
      <div className='bg-[#FFF6E3] flex items-center justify-center px-[1rem] py-[0.5rem] text-semibold text-[0.875rem] text-[#CAAB20] shadow-paper1 rounded-[0.5rem]'>
        {children}
      </div>
    </div>
  );
};

type SentMessageProsp = {} & PropsWithChildren;

export const SentMessage = ({ children }: SentMessageProsp) => {
  return (
    <div className='sticky top-0 flex justify-center'>
      <div className='bg-[#FFF6E3] flex items-center justify-center px-[1rem] py-[0.5rem] text-semibold text-[0.875rem] text-[#CAAB20] shadow-paper1 rounded-[0.5rem]'>
        {children}
      </div>
    </div>
  );
};
