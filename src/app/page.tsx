import { Button, HomeCaresol } from '@/components';
import Image from 'next/image';
import Section from './_components/Section';

export default function Home() {
  return (
    <div className='container'>
      <HomeCaresol />

      <section className='w-full flex flex-col gap-[2rem] md:pt-[10rem] md:pb-[5rem] py-[3rem] px-[1rem] items-center'>
        <h1 className='font-bold text-[3rem] text-center'>Feeling lonely?</h1>
        <p className='max-w-[50rem] text-center text-[1.5rem]'>
          Our app connects you with someone new, someone you don’t know and who
          don&apos;t know you either—so you can share your thoughts without
          hesitation. Whether it&apos;s things you wouldn&apos;t tell friends or
          family, we&apos;re here to give you a safe space to open up and feel
          heard.{' '}
          <strong>
            Join us, and find a listening ear whenever you need one
          </strong>
        </p>
      </section>
      <Section>
        <Image
          alt='chatting page image'
          src={'/phone-image-1.png'}
          layout='resposive'
          height={100}
          width={100}
          sizes='100vw'
          className='h-auto sm:w-auto w-[12rem]'
        />
        <div className='flex flex-col gap-[2rem] max-sm:items-center'>
          <h1 className='font-bold text-[3rem] sm:text-start text-center'>
            Only Text?
          </h1>

          <p className='text-[1.5rem] sm:text-start text-center'>
            Connect through words and emojis only. No images, no video, just
            real conversations that matter.
          </p>
        </div>
      </Section>
      <Section>
        <div className='flex flex-col gap-[2rem] max-sm:items-center'>
          <h1 className='font-bold text-[3rem] sm:text-start text-center'>
            Your Privacy?
          </h1>

          <p className='text-[1.5rem] sm:text-start text-center'>
            Don&apos;t worry, your credentials are not revealed to them untill
            you trust them and want to reveal.
          </p>
          <p className='text-[1.5rem] sm:text-start text-center'>
            Until then feel free to text anything. Just{' '}
            <strong className='font-extrabold text-red-600 underline'>
              don&apos;t leak any confidencial information or you are on your
              risk.
            </strong>
          </p>
        </div>
        <Image
          alt='chatting page image'
          src={'/private-credential.png'}
          layout='resposive'
          height={100}
          width={100}
          sizes='100vw'
          className='h-auto sm:w-auto w-[12rem] drop-shadow-md'
        />
      </Section>

      <Section>
        <Image
          alt='chatting page image'
          src={'/phone-image-2.png'}
          layout='resposive'
          height={100}
          width={100}
          sizes='100vw'
          className='h-auto sm:w-auto w-[12rem]'
        />
        <div className='flex flex-col gap-[2rem] max-sm:items-center'>
          <h1 className='font-bold text-[3rem] sm:text-start text-center'>
            Data Protection
          </h1>

          <p className='text-[1.5rem] sm:text-start text-center'>
            Protecting your data is our atmost priority. All messages are
            end-to-end encrypted.
          </p>
          <div>
            <Button>Privacy policy</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
