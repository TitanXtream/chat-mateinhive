import React from 'react';

const ChatDate = ({ time }: { time: string }) => {
  return (
    <div className='sticky top-0 flex justify-center z-[5]'>
      <div className='bg-[#FFF6E3] flex items-center justify-center px-[1rem] py-[0.5rem] text-semibold text-[0.875rem] text-[#CAAB20] shadow-paper1 rounded-[0.5rem]'>
        {time}
      </div>
    </div>
  );
};

export default ChatDate;
