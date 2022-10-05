import React, {useEffect, useState} from 'react';
import {Utils} from '../../misc/Utils';
import {PhotoOnWall} from './GalleryBuilder';
import {StyledPhotoPreview} from './StyledPhotoPreview';

interface Props {
  photo?: PhotoOnWall;
  onExit?: () => void;
}

export const PhotoPreview: React.FC<Props> = props => {
  const {photo} = props;
  const [offsetX, setOffsetX] = useState(0);
  const [isDelayExecuted, setIsDelayExecuted] = useState(false); // for Safari hacks
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const cssVarsStyle = {'--tx': offsetX + 'px', '--ty': offsetY + 'px'} as React.CSSProperties;

  useEffect(() => {
    document.documentElement.addEventListener('click', handleDocumentClick);

    return () => {
      document.documentElement.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Control photo loading
  useEffect(() => {
    if (!photo) {
      return;
    }

    const timeouts: number[] = [];
    setIsImageLoaded(false);

    // Add hacks for Safari
    // Safari bug 1: CSS variables not applied immediately if used in animation @ keyframes
    if (!Utils.isChromium()) {
      setIsDelayExecuted(false); // bug 1

      timeouts.push(
        window.setTimeout(() => {
          setIsDelayExecuted(true);
        }, 50),
      );
    } else {
      setIsDelayExecuted(true);
    }

    Utils.preloadImage(photo.url).then(() => {
      // Safari bug 2: When animating image, it may appear empty if you're changing src URL too quickly
      if (!Utils.isChromium()) {
        timeouts.push(
          window.setTimeout(() => {
            setIsImageLoaded(true);
          }, 100),
        );
      } else {
        setIsImageLoaded(true);
      }
    });

    return () => {
      timeouts.forEach(timer => clearTimeout(timer));
    };
  }, [photo]);

  function handleDocumentClick(e: MouseEvent) {
    setOffsetX(e.clientX - document.documentElement.clientWidth / 2);
    setOffsetY(e.clientY - document.documentElement.clientHeight / 2);
  }

  return (
    <StyledPhotoPreview.Wrapper className={photo && 'shown'} style={cssVarsStyle}>
      <StyledPhotoPreview.Backdrop className={photo && 'shown'} onClick={props?.onExit} />
      {photo && isDelayExecuted && <StyledPhotoPreview.Image src={isImageLoaded ? photo?.url : photo?.thumbUrl} />}
    </StyledPhotoPreview.Wrapper>
  );
};
