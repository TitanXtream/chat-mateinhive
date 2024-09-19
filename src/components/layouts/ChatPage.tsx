import React from 'react';

const ChatPage = () => {
  return (
    <div className='w-full h-screen bg-red-200 flex items-stretch [--header-height:4.5rem]'>
      <div className='w-[460px] shrink-0 bg-red-500 flex flex-col items-stretch'>
        <div className='h-[--header-height] bg-gray-400 shrink-0'></div>
        <div className='h-full bg-gray-300'></div>
      </div>
      <div className='w-full flex flex-col items-stretch bg-green-500'>
        <div className='h-[--header-height] bg-green-400 shrink-0'></div>
        <div
          className='h-full bg-[url("/chat-box-background.webp")] bg-repeat flex flex-col'
          style={{
            backgroundSize: '300px',
          }}
        >
          <div className='h-full'></div>
          <div className='h-[4rem] shrink-0 bg-yellow-600'></div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
