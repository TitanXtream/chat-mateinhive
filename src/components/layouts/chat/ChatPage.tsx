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
import { IconButton } from '../../ui/Buttons';
import ChatListItem from './ChatListItem';

import { ChatStatus } from './types';
import ChatBox from './ChatBox';
import { useChatSupportContext } from '@/features/ChatPageSupportProvicer';

import FindNewFriendsButton from './FindNewFriendsButton';
import ChatFilterBox from './ChatFilterBox';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import DropdownMenu, {
  DropdownMenuItem,
  DropdownMenuItems,
} from '@/components/ui/DropdownMenu';
import { useAuthContext } from '@/features/AuthenticationProvider';
import MessageInputBar from './MessageInputBar';

const ChatPage = () => {
  const [openNewChatSearchbar, setOpenNewChatSearchbar] = useState(false);
  const { isSearching } = useChatSupportContext();

  const { setUser } = useAuthContext();

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
              className='h-auto w-auto overflow-hidden'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
              placeholder='blur'
              loading='lazy'
            />
            <div className='flex items-center'>
              <DropdownMenu
                disabled={isSearching}
                buttonElement={
                  <IconButton>
                    <DotsIcon className='fill-primary-dark' />
                  </IconButton>
                }
              >
                <DropdownMenuItems>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setUser(null)}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuItems>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className='h-full bg-canvas overflow-hidden flex flex-col'>
          <div className='h-[4.5rem] bg-white  '>
            {openNewChatSearchbar ? (
              <div className='flex overflow-hidden h-full border-t-[1px] shadow-paper1'>
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
                  className='bg-brand-gray-extra-light h-[3rem] px-[1rem] rounded-[1rem] w-full outline-none ring-0 placeholder:text-brand-gray-dark'
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
        {openNewChatSearchbar && <ChatFilterBox />}
        <div className='h-[--header-height] bg-brand-gray-extra-light shrink-0'>
          <div className='relative h-full flex justify-between items-stretch w-full px-[1rem] gap-[1rem]'>
            <div className='w-full flex gap-[1rem] py-[0.5rem] overflow-hidden'>
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
              {/* <div>
                <IconButton>
                  <DotsIcon className='fill-primary-dark' />
                </IconButton>
              </div> */}
              <DropdownMenu
                disabled={isSearching}
                buttonElement={
                  <IconButton>
                    <DotsIcon className='fill-primary-dark' />
                  </IconButton>
                }
              >
                <DropdownMenuItems>
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Mute</DropdownMenuItem>
                  <DropdownMenuItem>Block</DropdownMenuItem>
                  <DropdownMenuItem>Ask to reveal</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuItems>
              </DropdownMenu>
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
          <MessageInputBar />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
