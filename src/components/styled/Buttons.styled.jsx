import styled from 'styled-components';
import Button from '@mui/material/Button';

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.black} !important;
  padding: 0.7rem 3rem !important;
  margin-top: 0.3rem !important;
  font-weight: bold !important;
  font-size: 1rem !important;
  transition: 0.2s !important;

  &.MuiButton-root:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.8;
  }
`;
