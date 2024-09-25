import { OAuthButton } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <div className='w-full bg-white rounded-[3rem] shadow-paper3 my-[5rem] flex overflow-hidden'>
        <div className='w-[50%] shrink-0 p-[2rem] flex flex-col gap-[2rem] items-center'>
          <Image
            src='/long-logo.svg'
            alt='logo'
            width={100}
            height={100}
            className='h-[3rem] w-auto'
          />
          <p className='text-center'>
            {' '}
            Connect with someone new and anonymous to share your thoughts
            freely. Whether it&apos;s things you wouldn&apos;t tell friends or
            family, our app offers a safe space to open up and feel heard.{' '}
            <strong>
              Join us, and find a listening ear whenever you need one
            </strong>
          </p>
          <div className='w-full flex'>
            <Image
              src='/private-credential.png'
              alt='logo'
              width={100}
              height={100}
              sizes='100vw'
              className='max-w-[12rem] w-full h-max shadow-paper3 rounded-[1rem]'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
              placeholder='blur'
              loading='lazy'
            />
            <div className='pl-[1rem]'>
              <ul className='flex flex-col gap-[1rem] list-disc list-inside font-semibold'>
                <li>Don&apos;t worry, Your info is not revealed.</li>
                <li>
                  Find somebody just to speak and get relief from loneliness
                </li>
                <li>
                  Only text and emoji, makes it a cool and concise place for
                  conversation. As it keeps and it simeple and only the part
                  that is needed.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[50%] shrink-0 p-[2rem] bg-primary text-white'>
          <div className='flex flex-col h-full gap-[2rem] items-center'>
            <h1 className='text-[2rem] font-semibold h-[3rem]'>Login</h1>
            <p className='text-center'>
              Oauth authentication technique ensure that no scammer or
              compromised, fraudulent, or suspicious account can enter the
              platform. Don&apos;t worry your credentials are safe with you.
            </p>
            <p className='text-center font-semibold text-[1.2rem]'>
              Login to MateinHive to get stated
            </p>

            <div className='flex flex-col gap-[0.5rem] w-[20rem] justify-center items-stretch'>
              <OAuthButton
                icon={
                  <Image
                    src={'/facebook_logo_2023.png'}
                    alt='facebook logo'
                    width={100}
                    height={100}
                  />
                }
                label='Login with facebook'
              />
              <OAuthButton
                icon={
                  <Image
                    src={'/instagram_logo_2023.png'}
                    alt='instagram logo'
                    width={100}
                    height={100}
                  />
                }
                label='Login with instagram'
              />
            </div>
            <p className='m-auto text-center mt-full'>
              Don&apos;t have an account?{' '}
              <span className='font-bold hover:underline'>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
