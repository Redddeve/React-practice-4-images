import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

const Modal = ({ children, close }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
