import { Button, HomeCaresol, LoadingSpinner } from '@/components';
import Image from 'next/image';
import Section from './_components/Section';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <HomeCaresol />
      </Suspense>

      <section className='w-full flex flex-col gap-[2rem] md:pt-[10rem] pb-[5rem] pt-[5rem] px-[1rem] items-center'>
        <h1 className='font-bold text-[3rem] text-center'>Feeling lonely?</h1>
        <p className='lg:max-w-[50rem] max-w-[24.5rem] text-center text-[1.5rem] max-lg:text-justify'>
          Connect with someone new and anonymous to share your thoughts freely.
          Whether it's things you wouldn't tell friends or family, our app
          offers a safe space to open up and feel heard.{' '}
          <strong>
            Join us, and find a listening ear whenever you need one
          </strong>
        </p>
      </section>
      <Section imageUrl='/phone-image-1-2.png' title='Only Text?'>
        <p className='sm:text-start text-center'>
          Connect through words and emojis only. No images, no video, just real
          conversations that matter.
        </p>
      </Section>
      <Section imageUrl='/private-credential.png' title='Your Privacy?'>
        <p className='sm:text-start text-center'>
          Don&apos;t worry, your credentials are not revealed to them untill you
          trust them and want to reveal.
        </p>
        <p className='sm:text-start text-center'>
          Until then feel free to text anything. Just{' '}
          <strong className='font-extrabold text-red-600 underline'>
            don&apos;t leak any confidencial information or you are on your
            risk.
          </strong>
        </p>
      </Section>

      <Section imageUrl='/phone-image-2-2.png' title='Data Protection'>
        <p className='sm:text-start text-center'>
          Protecting your data is our atmost priority. All messages are
          end-to-end encrypted.
        </p>
        <div>
          <Button>Privacy policy</Button>
        </div>
      </Section>
    </div>
  );
}
