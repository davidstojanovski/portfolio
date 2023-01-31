import React from 'react';
import { css } from 'styled-components/macro';
import styled from 'styled-components';

export const MenuItem = styled(({ active, ...rest }) => <span {...rest} />)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 1px;
  margin-right: 12.5px;
  margin-left: 12.5px;
  padding: 20px;
  -webkit-backface-visibility: hidden;
  position: relative;
  border: 0;
  cursor: pointer;

  &::after {
    transition: 0.2s ease-in-out;
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    left: 0;
    top: 120%;
    width: 100%;
    height: 5px;
    opacity: 0;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
      &::after {
        opacity: 100%;
      }
    `}

  ${(props) =>
    !props.active &&
    css`
      &:hover::after {
        opacity: 100%;
      }
    `}
`;
