import React from 'react';

const ChatFilterBox = () => {
  return (
    <div className='absolute inset-0 w-full h-full z-[10] flex items-stretch py-[4.5rem] px-[1rem] bg-brand-gray-extra-dark/50'>
      <div className='flex flex-col w-[25rem] bg-white rounded-[1rem] shadow-paper1 overflow-hidden'>
        <div className='flex flex-col h-full w-full px-[1rem]'>
          <h1 className='text-[1.25rem] h-[4rem] border-b-[1px] border-brand-gray-light flex items-center shrink-0'>
            Filters
          </h1>
          <div className='flex flex-col gap-[1rem] pt-[1rem] justify-center items-center h-full text-brand-gray-dark'>
            <h1 className='font-semibold text-[1.25rem]'>Coming soon</h1>
            <p className='text-center'>
              Shall be able to add filters like age and gender and find better
              matches like you want
            </p>
          </div>
        </div>
        <p className='p-[1rem] text-primary text-center flex items-center justify-center bg-brand-gray-extra-light text-[0.75rem]'>
          Currently we try to find anybody of any age and gender based on your
          preference
        </p>
      </div>
    </div>
  );
};

export default ChatFilterBox;
