'use client';

import {
  CrossIcon,
  DotsIcon,
  PlusIcon,
  SendIcon,
  SmileIcon,
} from '@/assets/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, IconButton } from '../../ui/Buttons';
import ChatListItem from './ChatListItem';

import { ChatStatus } from './types';
import ChatBox from './ChatBox';
import { useChatSupportContext } from '@/features/ChatPageSupportProvicer';
import SearchIcon from '@/assets/icons/SearchIcon';
import FindNewFriendsButton from './FindNewFriendsButton';

const ChatPage = () => {
  const [openNewChatSearchbar, setOpenNewChatSearchbar] = useState(false);
  const { setIsSearching, isSearching } = useChatSupportContext();

  return (
    <div className='w-full h-[100svh] bg-red-200 flex items-stretch [--header-height:4rem]'>
      <div className='w-[460px] shrink-0 flex flex-col items-stretch'>
        <div className='h-[--header-height] bg-white shrink-0 px-[1rem] py-[0.5rem]'>
          <div className='relative h-full flex justify-between items-stretch w-full'>
            <Image
              src={'/name-logo.svg'}
              alt={'logo'}
              layout='reponsive'
              width={100}
              height={100}
              // sizes='100vh'
              className='h-auto w-auto overflow-hidden'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
              placeholder='blur'
              loading='lazy'
            />
            <div className='flex items-center'>
              <IconButton disabled={isSearching}>
                <DotsIcon className='fill-primary-dark' />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='h-full bg-canvas overflow-hidden flex flex-col'>
          <div className='h-[4.5rem] bg-white  '>
            {openNewChatSearchbar ? (
              <div className='flex overflow-hidden h-full border-t-[1px] shadow-paper1'>
                {/* <button
                  className='h-full w-full px-[1rem] flex flex-row items-center hover:bg-brand-gray-extra-light/50 gap-[1rem]'
                  onClick={searchPeople}
                  disabled={isSearching}
                >
                  <SearchIcon className='fill-brand-gray-main' />
                  <div className=' flex flex-col items-stretch justify-center w-full'>
                    <p className='text-start text-primary'>
                      Click here to start searching
                    </p>
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
                </button> */}
                <FindNewFriendsButton />
                <div className='h-full px-[1rem] flex items-center'>
                  <IconButton disabled={isSearching}>
                    <CrossIcon
                      className='fill-brand-gray-dark'
                      onClick={() => {
                        setOpenNewChatSearchbar(false);
                      }}
                    />
                  </IconButton>
                </div>
              </div>
            ) : (
              <div className='w-full h-full p-[1rem] py-[0.5rem] flex justify-between items-center gap-[1rem]'>
                <input
                  className='bg-brand-gray-extra-light h-[3rem] px-[1rem] rounded-[1rem] w-full outline-none ring-0 placeholder:text-brand-gray-main'
                  placeholder='Search from my list'
                />
                <IconButton
                  onClick={() => {
                    setOpenNewChatSearchbar(true);
                  }}
                >
                  <PlusIcon className='fill-primary' />
                </IconButton>
              </div>
            )}
          </div>
          <div className='flex flex-col w-full items-stretch h-full'>
            {isSearching ? (
              <div className='w-full h-full flex items-center justify-center flex-col gap-[0.5rem]'>
                <div className='size-[4rem] rounded-[50%] border-[4px] border-x-primary border-t-primary-dark border-b-transparent animate-spin'></div>
                <p className='text-[0.75rem] text-primary'>
                  Finding new friends
                </p>
              </div>
            ) : openNewChatSearchbar ? (
              <div className='w-full h-full flex items-center justify-center text-brand-gray-dark px-[3rem]'>
                Find somebody you could never imagine otherwise
              </div>
            ) : (
              <>
                <ChatListItem
                  status={ChatStatus.recieved}
                  notifications={2}
                  mutted
                />
                <ChatListItem status={ChatStatus.justSent} />
                <ChatListItem status={ChatStatus.sentAndSeen} />
              </>
            )}
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-col items-stretch'>
        {openNewChatSearchbar && (
          <div className='absolute inset-0 w-full h-full z-[10] flex items-stretch py-[4.5rem] px-[1rem] bg-brand-gray-extra-dark/50'>
            <div className='flex flex-col w-[25rem] bg-white rounded-[1rem] shadow-paper1 overflow-hidden'>
              <div className='flex flex-col h-full w-full px-[1rem]'>
                <h1 className='text-[1.25rem] h-[4rem] border-b-[1px] border-brand-gray-light flex items-center shrink-0'>
                  Filters
                </h1>
                <div className='flex flex-col gap-[1rem] pt-[1rem] justify-center items-center h-full text-brand-gray-dark'>
                  <h1 className='font-semibold text-[1.25rem]'>Coming soon</h1>
                  <p className='text-center'>
                    Shall be able to add filters like age and gender and find
                    better matches like you want
                  </p>
                </div>
              </div>
              <p className='p-[1rem] text-primary text-center flex items-center justify-center bg-brand-gray-extra-light text-[0.75rem]'>
                Currently we try to find anybody of any age and gender based on
                your preference
              </p>
            </div>
          </div>
        )}
        <div className='h-[--header-height] bg-brand-gray-extra-light shrink-0'>
          <div className='relative h-full flex justify-between items-stretch w-full'>
            <div className='w-full flex gap-[1rem] px-[1rem] py-[0.5rem] overflow-hidden'>
              <div className='size-[3rem] rounded-[1rem] bg-brand-gray-main shrink-0'></div>
              <div className='text-start w-full overflow-hidden'>
                <div className='flex items-center gap-[0.25rem]'>
                  <h1 className='font-semibold truncate w-full'>AGG441ZZC</h1>
                </div>
                <div className='flex items-center gap-[0.25rem] w-full'>
                  <p className='text-[0.85rem] truncate text-brand-gray-dark w-full'>
                    How are you doing? All cool
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <IconButton>
                <DotsIcon className='fill-primary-dark' />
              </IconButton>
            </div>
          </div>
        </div>
        <div
          className='h-full bg-[url("/chat-box-background.webp")] bg-repeat flex flex-col overflow-hidden'
          style={{
            backgroundSize: '300px',
          }}
        >
          <ChatBox />
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
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
