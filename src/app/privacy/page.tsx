import React from 'react';
import PageLayout from '../_components/PageLayout';
import Heading from '@/components/ui/heading';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex gap-[3rem]'>
      <PageLayout>
        <div>
          <Heading>Privacy & Security</Heading>
          <p>
            At MateinHive, your privacy is our top priority. We have designed
            our platform to ensure that your personal data and interactions
            remain safe and secure at all times. Here’s how we protect your
            privacy:
          </p>
        </div>
        <div className='mt-[2rem]'>
          <Heading varient='small'>Anonymous Conversations</Heading>
          <p>
            We value your privacy, which is why your real identity remains
            hidden. Only basic details, such as age and gender, are visible to
            others unless you choose to share more information during
            conversations.
          </p>
        </div>
        <div>
          <Heading varient='small'>Data Encryption</Heading>
          <p>
            All conversations on our platform are protected with end-to-end
            encryption. This ensures that no one, not even us, can access the
            content of your messages. We also use SSL/TLS encryption to secure
            data transmissions.
          </p>
        </div>
        <div>
          <Heading varient='small'>Minimal Data Collection</Heading>
          <p>
            We only collect the data that is necessary for you to use our
            platform effectively. This includes your username, age, and gender.
            We never ask for sensitive information unless it's essential to the
            platform’s operation.
          </p>
        </div>
        <div>
          <Heading varient='small'>User Consent</Heading>
          <p>
            Before collecting any data, we ask for your explicit consent. We
            believe in transparency, so our terms and conditions clearly explain
            how we use your information and why.
          </p>
        </div>
        <div>
          <Heading varient='small'>Control Over Your Data</Heading>
          <p>
            You are always in control of your personal information. You can edit
            or delete your profile, and you can request to permanently delete
            your account and all associated data at any time.
          </p>
        </div>
        <div>
          <Heading varient='small'>No External Sharing</Heading>
          <p>
            We do not share your data with any third parties for advertising or
            other purposes. Your privacy is our commitment, and we ensure that
            no external tracking occurs outside of our platform.
          </p>
        </div>
        <div>
          <Heading varient='small'>Regular Security Audits</Heading>
          <p>
            We regularly review and audit our platform’s security to ensure your
            data is always protected. Our systems are continuously updated with
            the latest security protocols to prevent unauthorized access.
          </p>
        </div>
        <div>
          <Heading varient='small'>Clear Privacy Settings</Heading>
          <p>
            You can easily manage your privacy preferences through your account
            settings. Here, you control what information is visible and who can
            contact you. We’ve made it simple for you to manage your privacy.
          </p>
        </div>
        <div>
          <Heading varient='small'>Transparency in Data Usage</Heading>
          <p>
            We believe in complete transparency when it comes to data usage. Our
            privacy policy is written in clear, accessible language so you can
            understand exactly how we handle and store your information.
          </p>
        </div>
        <div className='mt-[3rem]'>
          <Heading>Need More Information?</Heading>
          <p>
            If you have any questions or concerns about your privacy or how we
            protect your data, feel free to contact our support team at
            [email/contact link]. We’re here to ensure that your experience is
            both safe and enjoyable.
          </p>
        </div>
      </PageLayout>
      <div className='max-lg:hidden w-auto h-[70svh] shrink-0 sticky top-[7rem]'>
        <Image
          src={'/phone-image-2.png'}
          layout='resposive'
          height={100}
          width={100}
          sizes='100vw'
          alt='Privacy encription photo'
          className='w-auto h-full'
        />
      </div>
    </div>
  );
};

export default page;
