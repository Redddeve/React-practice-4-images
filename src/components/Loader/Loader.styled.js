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
// export const LoaderContainer = styled.div`
//   position: absolute;
//   /* background-color: rgba(0, 0, 0, 0.5); */
//   z-index: 500;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
// `;

export const LoaderMoreContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
