'use client';

import React, { useEffect } from 'react';

const Modal = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const redoOverFlow = () => {
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <button
        className='fixed inset-0 z-[5] w-full h-[100svh] bg-brand-gray-extra-dark/50 flex items-center justify-center p-[1rem]'
        onClick={() => redoOverFlow()}
      ></button>
      <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[6] w-auto bg-white p-[2rem] rounded-[2rem] max-h-[calc(100svh_-_1rem)] overflow-auto mh-modal-scrollbar-2'>
        {children}
      </div>
    </>
  );
};

export default Modal;
