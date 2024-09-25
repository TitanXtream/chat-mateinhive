'use client';

import { LoadingSpinner } from '@/components';
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { ReactNode } from 'react';

const Auth0Consumer = ({
  loggedInChild,
  unloggedInChild,
}: {
  loggedInChild: ReactNode;
  unloggedInChild: ReactNode;
}) => {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading ? (
        <div className='h-[100svh] w-full'>
          <LoadingSpinner>Getting user info...</LoadingSpinner>
        </div>
      ) : user ? (
        loggedInChild
      ) : (
        unloggedInChild
      )}
    </>
  );
};

export default Auth0Consumer;
