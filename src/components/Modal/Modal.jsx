import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    close: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };
  render() {
    return (
      <Backdrop onClick={this.onBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}
