import React from 'react';
import {
  CenteredContainer,
  HomeDetailsSubTitle,
  HomeDetailsTitle,
  SubTitleContainer,
} from '../styled/HomeDetails.styled';
import openingTag from '../../static/Icons/ds_html_1.svg';
import closingTag from '../../static/Icons/ds_html_2.svg';
import { PrimaryButton } from '../styled/Buttons.styled';
// @ts-ignore
import cv from '../../static/cv.pdf';
// @ts-ignore
import ReactRotatingText from 'react-rotating-text';

export const HomeDetails = () => {
  return (
    <CenteredContainer>
      <HomeDetailsTitle>
        <ReactRotatingText items={['Hi!', "I'm David Stojanovski", 'Nice to meet you!']} />
      </HomeDetailsTitle>
      <SubTitleContainer style={{ width: '400px' }}>
        <img src={openingTag} alt="" />
        <HomeDetailsSubTitle>Senior Software Engineer</HomeDetailsSubTitle>
        <img src={closingTag} alt="" />
      </SubTitleContainer>
      <a href={cv} download="David-Stojanovski-CV" target="_blank" rel="noreferrer" className="no-decoration">
        <PrimaryButton>Download CV</PrimaryButton>
      </a>
    </CenteredContainer>
  );
};
