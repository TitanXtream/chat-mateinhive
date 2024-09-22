import React from 'react';
import PageLayout from '../_components/PageLayout';
import Heading from '@/components/ui/heading';
import { EnvelopeIcon } from '@/assets/icons';

const page = () => {
  return (
    <PageLayout>
      <div className='w-full h-auto flex items-center justify-center py-[3rem] sm:px-[2rem] px-[1rem]'>
        <div className='text-center max-w-[30rem] w-full h-auto p-[1rem] bg-white rounded-[1rem] shadow-paper1'>
          <h1 className='w-full text-center text-[1.5rem] font-semibold'>
            Contact us
          </h1>
          <p className='mt-[2rem]'>
            If you have any concerns reguarding our service or your privacy mail
            us here:
          </p>
          <div>
            <a
              href='mailto:abc@gmail.com'
              className='relative flex p-[1rem] rounded-[1rem] bg-brand-gray-extra-light max-w-[20rem] m-auto mt-[1rem] w-full hover:text-white hover:shadow-brand-gray-dark hover:shadow-md hover:bg-brand-gray-extra-light transition-all duration-500 overflow-hidden group'
            >
              <div className='absolute w-[200%] h-[200%] rounded-full bg-brand-gray-dark z-[4] inset-0 translate-x-[100%] group-hover:translate-x-[-50%] transition transform duration-700 ease-in-out'></div>
              <div className='relative z-[5] flex gap-[1rem]'>
                <EnvelopeIcon className='group-hover:fill-white transition-colors duration-500 fill-brand-gray-extra-dark' />
                <p>abc@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
