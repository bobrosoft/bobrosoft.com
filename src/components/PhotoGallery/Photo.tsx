import React, {ComponentPropsWithoutRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Utils} from '../../misc/Utils';
import {PhotoOnWall} from './GalleryBuilder';

interface Props extends ComponentPropsWithoutRef<'img'> {
  photo: PhotoOnWall;
}

const Image = styled.img`
  box-sizing: initial;
  position: absolute;
  border: 8px solid #fff;
  background-color: white;
  box-shadow: 0 0 10px black;
  cursor: pointer;
  object-fit: cover;
  opacity: 0;

  &.shown {
    animation: Photo-Image-appear 600ms forwards;
  }

  @keyframes Photo-Image-appear {
    100% {
      opacity: 1;
    }
  }
`;

export const Photo: React.FC<Props> = props => {
  const {photo} = props;
  const isDesktop = document.documentElement.clientWidth > document.documentElement.clientHeight;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    Utils.preloadImage(photo.thumbUrl).then(() => {
      setIsImageLoaded(true);
    });
  }, [photo]);

  return (
    <Image
      {...props}
      style={{
        top: photo.y,
        left: photo.x,
        width: photo.width,
        height: photo.height,
        transform: `translateZ(${(photo.random - 0.6) * (isDesktop ? 300 : 500)}px)`,
      }}
      className={isImageLoaded ? 'shown' : ''}
      src={photo.thumbUrl}
    />
  );
};
