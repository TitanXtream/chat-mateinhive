import { HomeCaresol, LoadingSpinner } from '@/components';

import Section from './_components/Section';
import { Suspense } from 'react';
import SubHeroSection from './_components/SubHeroSection';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <HomeCaresol />
      </Suspense>

      <SubHeroSection />
      <Section imageUrl='/phone-image-1.png' title='Only Text?'>
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

      <Section imageUrl='/phone-image-2.png' title='Data Protection'>
        <p className='sm:text-start text-center'>
          Protecting your data is our atmost priority. All messages are
          end-to-end encrypted.
        </p>
      </Section>
    </div>
  );
}
