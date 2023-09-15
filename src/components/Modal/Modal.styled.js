import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1300px;
  border-radius: 5px;
  & img {
    max-width: 1300px;
    max-height: 740px;
  }
`;
