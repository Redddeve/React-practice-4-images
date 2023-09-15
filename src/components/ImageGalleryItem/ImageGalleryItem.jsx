import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) => {
  return (
    <GalleryItem>
      <GalleryImg
        src={webformatURL}
        alt={tags}
        onClick={() => onOpenModal(largeImageURL, tags)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
