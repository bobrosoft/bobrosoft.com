import {Fade} from '@successtar/react-reveal';
import React, {ComponentPropsWithoutRef, useEffect, useRef, useState} from 'react';
import {photoList} from '../../data/photoList';
import useIntersectionObserver from '../../misc/useIntersectionObserver';
import useInterval from '../../misc/useInterval';
import {PhotoPreview} from './PhotoPreview';
import {GalleryBuilder, PhotoOnWall} from './GalleryBuilder';
import {Photo} from './Photo';
import {StyledPhotoGallery} from './StyledPhotoGallery';

interface Props extends ComponentPropsWithoutRef<'div'> {
  shouldReveal: boolean;
}

export const PhotoGallery: React.FC<Props> = props => {
  const visibilityRef = useRef<HTMLDivElement | null>(null);
  const visibilityObserver = useIntersectionObserver(visibilityRef, {threshold: 0.3});
  const [isInitialized, setIsInitialized] = useState(false);
  const [gallery, setGallery] = useState<GalleryBuilder>();
  const [lastAddedIndex, setLastAddedIndex] = useState(-1);
  const [photos, setPhotos] = useState<PhotoOnWall[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoOnWall>();

  useEffect(() => {
    // Need to init stuff here explicitly because of hot reload
    const gallery = new GalleryBuilder({photoGapInPx: 26, photoWidthInPx: 150, useSmoothStart: true});
    setGallery(gallery);
    setPhotos([]);
    setLastAddedIndex(-1);
  }, []);

  // Need to initialize animation in the right moment
  useEffect(() => {
    if (!isInitialized && props.shouldReveal && visibilityObserver?.isIntersecting) {
      setIsInitialized(true);
    }
  }, [props.shouldReveal, visibilityObserver?.isIntersecting]);

  useInterval(
    () => {
      handleAddPhotoIntervalTick();
    },
    isInitialized ? (photos.length < 30 ? 400 : 1000) : null,
  );

  function handleAddPhotoIntervalTick() {
    let newLastAddedIndex = lastAddedIndex + 1;
    let newPhoto = photoList[newLastAddedIndex];

    if (!newPhoto) {
      newLastAddedIndex = 0;
      newPhoto = photoList[0];
    }

    setLastAddedIndex(newLastAddedIndex);
    setPhotos([...photos, ...[gallery!.addPhotoToWall(newPhoto)]]);
  }

  function handlePhotoClick(photo: PhotoOnWall) {
    setSelectedPhoto(photo);
  }

  function handlePhotoPreviewExit() {
    setSelectedPhoto(undefined);
  }

  return (
    <>
      <StyledPhotoGallery.Wrapper height={500} {...props}>
        <div ref={visibilityRef}></div>
        <Fade when={props.shouldReveal}>
          <h2 className={'text-center'}>Also I Like To Take Photos&nbsp;&nbsp;📸</h2>
        </Fade>
        <StyledPhotoGallery.AnimatedContainer className={isInitialized ? 'animate' : ''}>
          {photos.map((photo, index) =>
            photo === selectedPhoto ? (
              <></>
            ) : (
              <Photo key={index} photo={photo} onClick={() => handlePhotoClick(photo)} />
            ),
          )}
        </StyledPhotoGallery.AnimatedContainer>
      </StyledPhotoGallery.Wrapper>
      <PhotoPreview photo={selectedPhoto} onExit={handlePhotoPreviewExit} />
    </>
  );
};
