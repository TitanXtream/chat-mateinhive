import { DotsIcon, PlusIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import { IconButton } from '../../ui/Buttons';
import ChatListItem from './ChatListItem';
import ChatDate from './ChatDate';
import { RecievedMessage, SentMessage } from './ChatMessages';

const ChatPage = () => {
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
              <IconButton>
                <DotsIcon className='fill-primary-dark' />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='h-full bg-canvas'>
          <div className='h-[4.5rem] bg-white p-[1rem] py-[0.5rem] shadow-paper1 flex justify-between items-center gap-[1rem]'>
            <input
              className='bg-brand-gray-extra-light h-[3rem] px-[1rem] rounded-[1rem] w-full outline-none ring-0 placeholder:text-brand-gray-main'
              placeholder='Search from my list'
            />
            <IconButton>
              <PlusIcon className='fill-primary' />
            </IconButton>
          </div>
          <div className='flex flex-col w-full items-stretch'>
            <ChatListItem status={0} notifications={2} mutted />
            <ChatListItem status={1} />
            <ChatListItem status={3} />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-stretch'>
        <div className='h-[--header-height] bg-brand-gray-extra-light shrink-0'></div>
        <div
          className='h-full bg-[url("/chat-box-background.webp")] bg-repeat flex flex-col overflow-hidden'
          style={{
            backgroundSize: '300px',
          }}
        >
          <div className='h-full flex flex-col gap-[1rem] p-[1rem] items-stretch w-full overflow-auto'>
            <div className='relative w-full flex flex-col gap-[1rem]'>
              <ChatDate />
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <SentMessage text='Hi there! How are you?' />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <RecievedMessage text='Hi there' />
                <RecievedMessage text='How are you?' />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <SentMessage
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
                <SentMessage
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
                <SentMessage
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
              rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb 😃'
                />
              </div>
            </div>
          </div>
          <div className='h-[4rem] shrink-0  bg-brand-gray-extra-light'></div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
