import React, { useEffect, useState } from 'react';
import mail from '../static/Icons/mail.svg';
import github from '../static/Icons/github.svg';
import linkedin from '../static/Icons/li.svg';
import { SocialIcon } from './styled/SocialMediaIcons.styled';

export const SocialMediaIconsContainer = () => {
  const handleClick = (url: string) => window.open(url, '_blank');

  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {
    return <></>;
  }

  return (
    <div style={{ width: '50px', position: 'absolute', top: '50%', left: '10px' }}>
      <SocialIcon img={github} onClick={() => handleClick('https://github.com/stojanovskid')} />
      <SocialIcon
        img={mail}
        onClick={() => handleClick('mailto:david.stojanovski@yahoo.com?subject=Hello David Stojanovski')}
      />
      <SocialIcon
        style={{ width: '40px', height: '40px', position: 'absolute', left: '5px' }}
        img={linkedin}
        onClick={() => handleClick(process.env.REACT_APP_GITHUB as string)}
      />
    </div>
  );
};
