import React, { ReactNode } from 'react';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

type Props = { children: ReactNode };

const HomeLayout = ({ children }: Props) => {
  return (
    <div className='min-h-[100svh] flex flex-col'>
      <main className='flex-1 container'>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
