import styled from 'styled-components';

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
`;

export const ShadowDiv = styled.div`
  border: 1px solid;
  padding: 10px;
  max-width: 700px;
  min-height: 600px;
  box-shadow: inset 100px 33px 25px 8px #040404, inset 0 0 15px 0px #ccc, inset 0 0 5px 1px #040404;
`;

export const MainText = styled.div`
  color: white;
  width: 70%;
  padding: 30px 0 0 30px;
  font-size: ${({ theme }) => theme.fontSize.small};
`;
