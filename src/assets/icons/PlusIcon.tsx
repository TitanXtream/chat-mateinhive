import React from 'react';
import MHIcon from './MHIcon';

const PlusIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <MHIcon {...props}>
      <path
        d='M28 13H19V4C19 2.89562 18.1044 2 17 2H15C13.8956 2 13 2.89562 13 4V13H4C2.89562 13 2 13.8956 2 15V17C2 18.1044 2.89562 19 4 19H13V28C13 29.1044 13.8956 30 15 30H17C18.1044 30 19 29.1044 19 28V19H28C29.1044 19 30 18.1044 30 17V15C30 13.8956 29.1044 13 28 13Z'
        fill='inherit'
      />
    </MHIcon>
  );
};

export default PlusIcon;
