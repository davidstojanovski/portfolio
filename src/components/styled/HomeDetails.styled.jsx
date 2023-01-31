import styled from 'styled-components';

export const HomeDetailsTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  min-height: 180px;
`;

export const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Heebo', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const HomeDetailsSubTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const SubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  img {
    max-width: 4rem;
  }
`;
