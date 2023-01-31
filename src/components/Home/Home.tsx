import React from 'react';
import { HomeDetails } from './HomeDetails';
import { SocialMediaIconsContainer } from '../SocialMediaIconsContainer';
import styled from 'styled-components';

const HomeStyled = styled.div`
  position: relative;
  height: 100%;
`;

export const Home = () => {
  return (
    <HomeStyled>
      <SocialMediaIconsContainer />
      <HomeDetails />
    </HomeStyled>
  );
};
