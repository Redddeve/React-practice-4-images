import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  z-index: 500;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const LoaderMoreContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
