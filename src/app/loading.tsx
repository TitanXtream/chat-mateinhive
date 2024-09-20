import { LoadingSpinner } from '@/components';
import React from 'react';

const loading = () => {
  return (
    <div className='w-full h-svh'>
      <LoadingSpinner />
    </div>
  );
};

export default loading;
