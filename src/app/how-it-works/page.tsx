import React from 'react';
import PageLayout from '../_components/PageLayout';
import Heading from '@/components/ui/heading';

const page = () => {
  return (
    <PageLayout>
      <Heading>How it works</Heading>
      <div>
        <Heading varient='small'>Find matches</Heading>
        <p>
          Time to find people who are also looking for someone like you to speak
          freely and openly. We find random people, from almost anywhere in the
          world, to match and speak with you via our text messaging service. Our
          goal is to reduce loneliness by providing opportuity to talk to some
          new people via our platform.
        </p>
      </div>
      <div>
        <Heading varient='small'>Filters</Heading>
        <p>
          The finding process will be personlaised for you based on the
          description of the type of the people you want to talk. This will be
          done by the filter putting some parameters over the finding and
          matching process.
        </p>
      </div>
      <div>
        <Heading varient='small'>Hidden Identity</Heading>
        <p>
          Here is the fun part. When you get matches you will not see there
          names and any other info except age and gender. Now it is up to you to
          find out who he or she is, what he or she likes, etcs. Note: after
          talking for a while and gaining enough info about the person if you
          want to do anthing like image sharing or dating then there are other
          apps for that, take each others contact and feel free to use those
          platforms but if need any new mate again you are welcome.
        </p>
      </div>

      <div>
        <Heading varient='small'>Open for any conversation</Heading>
        <p>...</p>
      </div>
    </PageLayout>
  );
};

export default page;
