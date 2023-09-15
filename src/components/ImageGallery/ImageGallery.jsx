import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data, onOpenModal }) => {
  return (
    <Gallery>
      {data.map(img => {
        return (
          <ImageGalleryItem {...img} key={img.id} onOpenModal={onOpenModal} />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
