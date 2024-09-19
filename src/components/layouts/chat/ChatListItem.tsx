import { CutBellIcon, DoubleTickIcon } from '@/assets/icons';
import TickIcon from '@/assets/icons/TickIcon';
import React from 'react';

type ChatListItemType = { mutted?: boolean } & (
  | ({
      status: 0; // message recieved
    } & RecievedStatusType)
  | {
      status: 1; // message sent but user did not recieved
    }
  | {
      status: 2; // message sent and user recieved but not seen yet
    }
  | {
      status: 3; // message sent and user recieved and seen
    }
);

type RecievedStatusType = {
  notifications: number;
};

const ChatListItem = ({ mutted, ...props }: ChatListItemType) => {
  return (
    <button className='w-full hover:bg-brand-gray-extra-light'>
      <div className='w-full flex gap-[1rem] px-[1rem] py-[0.5rem] overflow-hidden'>
        <div className='size-[3rem] rounded-[1rem] bg-brand-gray-main shrink-0'></div>
        <div className='text-start w-full overflow-hidden'>
          <div className='flex items-center gap-[0.25rem]'>
            <h1 className='font-semibold truncate w-full'>AGG441ZZC</h1>
            <p className='text-[0.75rem] w-auto shrink-0 text-brand-gray-dark'>
              12:12 am
            </p>
          </div>
          <div className='flex items-center gap-[0.25rem] w-full'>
            <p className='text-[0.85rem] truncate text-brand-gray-dark w-full'>
              How are you doing? All cool djhgvjhab
              vkdahvhadkjvhakjhvkahvjlkahjkv hkuaefh oajh
            </p>
            <div className='[&>#mh-icon-frame]:size-[1rem]  flex gap-[0.25rem]'>
              {mutted ? <CutBellIcon className='fill-brand-gray-dark' /> : ''}
              {props.status === 0 ? (
                <div className='bg-[#6FCC40] rounded-[2rem] text-[0.75rem] text-white h-[1rem] min-w-[1rem] flex items-center justify-center'>
                  {props.notifications}
                </div>
              ) : props.status === 1 ? (
                <TickIcon className='fill-brand-gray-dark' />
              ) : props.status === 2 ? (
                <DoubleTickIcon className='fill-brand-gray-dark' />
              ) : (
                <DoubleTickIcon className='fill-[#0094e9]' />
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ChatListItem;
