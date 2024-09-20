'use client';

import SearchIcon from '@/assets/icons/SearchIcon';
import { useChatSupportContext } from '@/features/ChatPageSupportProvicer';
import React from 'react';

const FindNewFriendsButton = () => {
  const { setIsSearching, isSearching } = useChatSupportContext();

  const searchPeople = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 5000);
  };

  return (
    <button
      className='h-full w-full px-[1rem] flex flex-row items-center hover:bg-brand-gray-extra-light/50 gap-[1rem] disabled:pointer-events-none disabled:opacity-50'
      onClick={searchPeople}
      disabled={isSearching}
    >
      <SearchIcon className='fill-brand-gray-main' />
      <div className=' flex flex-col items-stretch justify-center w-full'>
        <p className='text-start text-primary'>Click here to start searching</p>
        <div className='flex text-[0.75rem] gap-[0.5rem]'>
          <p>Search by</p>{' '}
          <span className='bg-brand-gray-light px-[1rem] rounded-[0.25rem]'>
            Age: Any
          </span>{' '}
          <span className='bg-brand-gray-light px-[1rem] rounded-[0.25rem]'>
            Gender: Any
          </span>
        </div>
      </div>
    </button>
  );
};

export default FindNewFriendsButton;
