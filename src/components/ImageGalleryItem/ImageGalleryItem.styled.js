import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;
`;

export const GalleryImg = styled.img`
  width: 400px;
  height: 300px;
  /* width: 100%;
  height: 300px; */
  object-fit: cover;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;
