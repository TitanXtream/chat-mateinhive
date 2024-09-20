import { DotsIcon, PlusIcon, SendIcon, SmileIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import { IconButton } from '../../ui/Buttons';
import ChatListItem from './ChatListItem';
import ChatDate from './ChatDate';
import { RecievedMessage, SentMessage } from './ChatMessages';
import { ChatStatus } from './types';

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
            <ChatListItem
              status={ChatStatus.recieved}
              notifications={2}
              mutted
            />
            <ChatListItem status={ChatStatus.justSent} />
            <ChatListItem status={ChatStatus.sentAndSeen} />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-stretch'>
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
                    How are you doing? All cool djhgvjhab
                    vkdahvhadkjvhakjhvkahvjlkahjkv hkuaefh oajh
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
          <div className='h-full flex flex-col gap-[1rem] p-[1rem] items-stretch w-full overflow-auto'>
            <div className='relative w-full flex flex-col gap-[1rem]'>
              <ChatDate time='16-09-2024' />
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <SentMessage
                  text='Hi there! How are you?'
                  time='12:00 am'
                  status={ChatStatus.sentAndSeen}
                />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <RecievedMessage text='Hi there' time={'12:03 am'} />
                <RecievedMessage text='How are you?' time={'12:03 am'} />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <SentMessage
                  time='12:05 am'
                  status={ChatStatus.sentAndSeen}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
                <SentMessage
                  time='12:05 am'
                  status={ChatStatus.sentAndSeen}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
                <SentMessage
                  time='12:06 am'
                  status={ChatStatus.sentAndSeen}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
              rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb 😃'
                />
              </div>
            </div>
            <div className='relative w-full flex flex-col gap-[1rem]'>
              <ChatDate time='17-09-2024' />
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <SentMessage
                  time='12:10 am'
                  status={ChatStatus.sentAndSeen}
                  text='Hi there! How are you?'
                />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <RecievedMessage text='Cool' time={'12:26 am'} />
                <RecievedMessage
                  time={'12:26 am'}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <SentMessage
                  time='12:40 am'
                  status={ChatStatus.sentAndSeen}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
                <SentMessage
                  time='4:30 am'
                  status={ChatStatus.sentAndSeen}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
                <SentMessage
                  time='4:32 am'
                  status={ChatStatus.completeSent}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
              rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb 😃'
                />
              </div>
              <div className='flex flex-col w-full gap-[0.25rem]'>
                <RecievedMessage text='Cool' time={'12:26 am'} />
                <RecievedMessage
                  time={'12:26 am'}
                  text='I am fine jahdegfk ihfedsouahkj jeoajf eoijgoij oij pei loiej
                gtpij p oilerjtgpisj jg loirrj pijpigj pisrj gprisj pirjg pi
                rpoisjgpijkp isj gpi sij psj pjsp jpijp dkjhb'
                />
              </div>
            </div>
          </div>
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
