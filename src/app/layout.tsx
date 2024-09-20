import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Lato, Lora } from 'next/font/google';
import './globals.css';
import { ChatPage, HomeLayout } from '@/components';
import AuthProvider, { AuthConsumer } from '@/features/AuthenticationContext';
import ChatLayout from '@/components/layouts/chat/ChatLayout';
import { getUser } from './actions';
import Device from '@/features/DeviceProvider';
import ChatPageSupportProvicer from '@/features/ChatPageSupportProvicer';

const defaultFonts = Lato({
  variable: '--font-family',
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  console.log(user);
  // fff8fb
  return (
    <html lang='en'>
      <body className={`${defaultFonts.className} antialiased bg-[#fff9fc]`}>
        <AuthProvider>
          <Device>
            {() => (
              <AuthConsumer
                loggedInChild={
                  <ChatPageSupportProvicer>
                    <ChatPage />
                  </ChatPageSupportProvicer>
                }
                unloggedInChild={<HomeLayout>{children}</HomeLayout>}
              />
            )}
          </Device>
        </AuthProvider>
      </body>
    </html>
  );
}
