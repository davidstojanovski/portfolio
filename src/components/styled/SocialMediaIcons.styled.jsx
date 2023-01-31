import styled from 'styled-components';
import { css } from 'styled-components/macro';
import React from 'react';

export const SocialIcon = styled(({ img, ...rest }) => <div {...rest} />)`
  height: 50px;
  width: 50px;
  background-size: cover;
  cursor: pointer;

  ${({ img }) =>
    img &&
    css`
      background-image: url(${img});
    `}

  &:hover {
    opacity: 50%;
  }
`;
