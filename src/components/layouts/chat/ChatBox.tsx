import React from 'react';
import ChatDate from './ChatDate';
import { RecievedMessage, SentMessage } from './ChatMessages';
import { ChatStatus } from './types';

const ChatBox = () => {
  return (
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
  );
};

export default ChatBox;
