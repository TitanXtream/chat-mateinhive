import { Modal } from '@/components';
import Heading from '@/components/ui/heading';

import React from 'react';
import ActionSection from './_components/ActionSection';

const TermsAndServicesModal = () => {
  return (
    <Modal>
      <div className='max-w-[40rem] w-full'>
        <Heading>Terms and Services</Heading>
        <div className='flex flex-col gap-[2rem] mt-[2rem]'>
          <p>
            Our platform&apos;s main objective is to connect people who are
            looking for someone to chat with and relieve feelings of
            loneliness—anytime—without revealing personal details such as
            images, names, or locations at the outset. However, age and gender
            will be visible to help foster more comfortable and meaningful
            conversations.
          </p>
          <p>
            This space is designed to encourage open, casual conversations to
            help combat loneliness, depression, or negative thoughts. Feel free
            to ask questions and have fun conversations!
          </p>
          <div className='flex flex-col gap-[1rem]'>
            <h1 className='font-semibold'>⚠️ Important:</h1>
            <p className='font-semibold'>
              This platform is strictly for casual and friendly conversations.
              Any form of sales promotions, branding, or marketing is not
              allowed.
            </p>
            <p className='font-semibold'>
              If your account is reported for violating these guidelines, we
              will investigate, and if found guilty, actions will be taken based
              on the nature of the violation:
            </p>
          </div>
          <div className='flex flex-col gap-[1rem]'>
            <Heading varient='small'>Account Ban Policy:</Heading>
            <ul className='flex flex-col gap-[1rem] list-disc'>
              <li className='flex flex-col gap-[0.5rem]'>
                <h1 className='font-semibold'>Scams or Money Loss:</h1>
                <ul className='pl-[1rem] flex flex-col gap-[0.5rem] list-disc'>
                  <li>1st report: Account will be banned for 1 week.</li>
                  <li>2nd report: Account will be banned for 1 month.</li>
                  <li>
                    3rd report: Permanent ban. Additionally, if users request,
                    your connected Facebook account may be disclosed. We enforce
                    this strictly to maintain a scam-free platform.
                  </li>
                </ul>
              </li>
              <li className='flex flex-col gap-[0.5rem]'>
                <h1 className='font-semibold'>Promotion without Money Loss:</h1>
                <ul className='pl-[1rem] flex flex-col gap-[0.5rem] list-disc'>
                  <li>1st and 2nd report: You will receive a warning.</li>
                  <li>3rd report: Account will be banned for 1 week.</li>
                  <li>4th report: Account will be banned for 1 month.</li>
                  <li>
                    5th report: Permanent ban. Your account credentials will
                    remain confidential unless there is a serious violation
                    involving money.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-[1rem]'>
            <Heading varient='small'>Stay Vigilant:</Heading>

            <p>
              Users are strongly advised to be cautious about the information
              they share. Do not share confidential details that could lead to
              financial loss. If you experience a scam, report it, and we will
              take appropriate action, such as banning the account and, if
              necessary, disclosing their third-party credentials (e.g.,
              Facebook) based on our policy. Please note: We cannot guarantee
              any financial compensation or recovery.
            </p>
            <p>
              Feel free to block anyone if the conversation makes you
              uncomfortable.
            </p>
          </div>

          <div className='w-full h-[1px] bg-brand-gray-light'></div>
          <div className='flex flex-col gap-[1rem]'>
            <Heading varient='small'> Welcome to MateinHive</Heading>
            <p>
              Welcome to MateinHive, let&apos;s not be alone even at the
              solitary lonely van.
            </p>
          </div>
          <ActionSection />
        </div>
      </div>
    </Modal>
  );
};

export default TermsAndServicesModal;
