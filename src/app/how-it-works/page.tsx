'use client';
import React from 'react';
import PageLayout from '../_components/PageLayout';
import Heading from '@/components/ui/heading';
import { MHmotion } from '@/components';

const fadeInRightAnimation = {
  initial: { opacity: 0, x: '-5rem' },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};
const page = () => {
  return (
    <PageLayout>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading>How it works</Heading>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Open for any conversation</Heading>
        <p>
          On most platforms, your profile and identity are visible, making it
          hard to speak freely. But here, it's different. With only your age and
          gender shared, your identity remains hidden, creating a space where
          you can express yourself openly. Whether it's something you can't
          share with friends or family, this platform is designed to provide a
          safe environment for meaningful conversations. It’s a place to find
          relief from pain and loneliness through honest, anonymous
          interactions.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Mystery Connections</Heading>

        <p>
          The excitement of connection begins with the mystery. When you're
          connected, only basic details like age and gender are revealed,
          leaving the rest for you to discover through genuine conversation.
          This anonymity encourages deeper discussions and fosters authentic
          connections. We don’t just provide one user for you to connect with;
          instead, we curate a group of potential connections to fill your day
          with engaging conversations. You have the freedom to choose which
          interactions you want to pursue. Whether it's your first connection or
          your tenth, there’s always a new opportunity waiting for you.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Chat recomendations</Heading>

        <p>
          As you engage with your connections, the platform intelligently adapts
          to your interactions, recommending the next set of messages to enhance
          your conversations. This personalized approach ensures that each
          exchange becomes more engaging and tailored to your preferences.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Find Connections</Heading>
        <p>
          Connect with inMHmotion.dividuals who are also seeking open and
          meaningful conversations. Our platform pairs you with random users
          from around the globe, allowing you to engage in real-time text
          messaging. By facilitating new connections, our goal is to combat
          loneliness and provide a supportive space where you can meet and
          interact with a MHmotion.diverse range of people, each with their own
          unique stories.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Personalize with filters</Heading>
        <p>
          To make your experience even more personalized, our advanced filtering
          system allows you to customize your search criteria. You can define
          specific parameters, such as age, gender, and more, to find and
          connect with inMHmotion.dividuals who meet your preferences. This
          tailored approach ensures that your connections align with your
          interests, enhancing the depth and relevance of every interaction.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Only Text and Emoji</Heading>
        <p>
          Embrace the simplicity of communication on our platform. By focusing
          solely on text and emojis, we create a relaxed environment that
          encourages authentic expression without the distractions of images or
          complex media. This streamlined approach fosters meaningful
          interactions, allowing you to convey emotions and thoughts clearly
          while keeping the conversation light and fun. Whether you’re sharing a
          laugh or discussing a topic close to your heart, our focus on text and
          emojis makes every chat engaging and accessible.
        </p>
        <p className='mt-[0.5rem]'>
          Looking ahead, we are excited to explore the addition of more
          interactive GIFs to further enhance your communication experience,
          making conversations even more engaging and expressive. Whether you’re
          sharing a laugh or discussing a topic close to your heart, our focus
          on text and emojis ensures that every chat remains accessible and
          enjoyable.
        </p>
      </MHmotion.div>
    </PageLayout>
  );
};

export default page;
