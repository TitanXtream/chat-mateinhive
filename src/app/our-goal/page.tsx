'use client';

import React from 'react';
import PageLayout from '../_components/PageLayout';
import Heading from '@/components/ui/heading';
import { Button } from '@/components';
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
        <Heading>Our Goal</Heading>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Encouraging Open Expression</Heading>
        <p>
          Many individuals struggle to share their thoughts and feelings with
          friends and family, fearing judgment or misunderstanding. Our platform
          provides a unique solution by allowing users to engage in
          conversations where their identity remains hidden, except for basic
          details like age and gender. This anonymity encourages users to
          express themselves freely, fostering honest discussions about personal
          experiences, interests, and challenges. We believe that everyone
          deserves a safe space to share their voice.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Combatting Loneliness</Heading>
        <p>
          In today’s fast-paced world, many people experience feelings of
          loneliness and isolation. Traditional social media platforms often
          prioritize image-driven content and superficial connections, leaving
          individuals longing for deeper, more meaningful interactions. Our goal
          is to create a space where people can connect authentically without
          the pressure of revealing their full identities. By fostering genuine
          conversations, we aim to help individuals find companionship and
          support in a welcoming environment.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Facilitating Genuine Connections</Heading>
        <p>
          While most social platforms focus on curated feeds and likes, we
          emphasize the importance of real-time conversations. Our platform
          connects users with a diverse group of individuals, allowing them to
          choose which conversations to engage in. By prioritizing meaningful
          interactions over superficial likes, we help users build lasting
          connections that can lead to friendship and support.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Personalized Engagement</Heading>
        <p>
          We understand that every individual has unique preferences and needs.
          Our platform’s intelligent features, such as chat recommendations
          based on user interactions, ensure that each conversation is tailored
          to enhance engagement and relevance. This personalized approach
          empowers users to explore connections that resonate with them, making
          every interaction more meaningful.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Looking to the Future</Heading>
        <p>
          We are committed to continuously improving our platform by exploring
          new features that enhance user experience. Our vision includes the
          potential integration of interactive elements, such as GIFs and other
          multimedia tools, to enrich conversations and make interactions even
          more enjoyable.
        </p>
      </MHmotion.div>
      <MHmotion.div {...fadeInRightAnimation}>
        <Heading varient='small'>Join Us in Our Mission</Heading>
        <p>
          We believe that everyone deserves to feel connected and supported. By
          addressing the challenges of loneliness and promoting open expression,
          our platform aims to create a vibrant community where individuals can
          find companionship and share their experiences. Join us on this
          journey to redefine social connections and foster meaningful
          relationships.
        </p>
        <div className='mt-[2rem]'>
          <Button>Join waitlist</Button>
        </div>
      </MHmotion.div>
    </PageLayout>
  );
};

export default page;
