import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ text, onLoadMore }) => {
  return <StyledButton onClick={onLoadMore}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
