import React, { ReactNode } from 'react';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

type Props = { children: ReactNode };

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <header className='h-[5rem] sticky top-0 z-[15]'>
        <TopNavbar />
      </header>
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
