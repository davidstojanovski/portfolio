import React, { useEffect, useState } from 'react';
import { SocialMediaIconsContainer } from '../SocialMediaIconsContainer';
import { CenteredContainer } from '../styled/HomeDetails.styled';
import { MainText, ShadowDiv, Title } from '../styled/About.styled';

export const About = () => {
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
    return (
      <div style={{ height: '100%', position: 'relative' }}>
        <Title>About Me</Title>
        <MainText>
          Senior Software Engineer with a Bachelor of Computer Science and Engineering with more then 5 years of working
          experience, primary focused on web development, along with practical knowledge of various other technologies,
          practices and principles.
          <br />
          <br />
          Recognized as a hardworking professional with cheerful and team-oriented attitude, I look forward to achieving
          my career goals while maintaining the workplace as enjoyable as possible. I believe that a good working
          atmosphere is key to a motivated and successful team.
        </MainText>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <SocialMediaIconsContainer />
      <CenteredContainer>
        <ShadowDiv>
          <Title>About Me</Title>
          <MainText>
            Senior Software Engineer with a Bachelor of Computer Science and Engineering with more then 5 years of
            working experience, primary focused on web development, along with practical knowledge of various other
            technologies, practices and principles.
            <br />
            <br />
            Recognized as a hardworking professional with cheerful and team-oriented attitude, I look forward to
            achieving my career goals while maintaining the workplace as enjoyable as possible. I believe that a good
            working atmosphere is key to a motivated and successful team.
          </MainText>
        </ShadowDiv>
      </CenteredContainer>
    </div>
  );
};
