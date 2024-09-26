'use client';
import { Button } from '@/components';

import React, { useState } from 'react';

const ActionSection = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  return (
    <>
      <div className='w-full h-[1px] bg-brand-gray-light'></div>
      <div className='flex items-center gap-[1rem]'>
        <input
          type='checkbox'
          id='accept-terms'
          className='size-[1.25rem] rounded-[1rem] overflow-hidden'
          onChange={(e) => {
            setTermsAccepted(e.target.checked);
          }}
        />
        <label htmlFor='accept-terms'>
          I have read and agree with the terms and conditions
        </label>
      </div>
      <div className='flex justify-end gap-[1rem]'>
        <Button varient='text' as='a' href='../'>
          Cancel
        </Button>
        <Button disabled={!termsAccepted}>Next</Button>
      </div>
    </>
  );
};

export default ActionSection;
