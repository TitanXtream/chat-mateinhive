import React from 'react';
import Picker from 'emoji-picker-react';
import { IconButton } from '@/components/ui/Buttons';
import { SendIcon, SmileIcon } from '@/assets/icons';

const MessageInputBar = () => {
  return (
    <div className='h-[4rem] shrink-0  bg-brand-gray-extra-light flex px-[1rem] py-[0.5rem]'>
      <IconButton>
        <SmileIcon className='fill-brand-gray-dark' />
      </IconButton>
      <input
        className='bg-white h-[3rem] px-[1rem] rounded-[1rem] w-full outline-none ring-0 placeholder:text-brand-gray-main'
        placeholder='Search from my list'
      />
      <IconButton>
        <SendIcon className='fill-brand-gray-dark' />
      </IconButton>
    </div>
  );
};

export default MessageInputBar;
