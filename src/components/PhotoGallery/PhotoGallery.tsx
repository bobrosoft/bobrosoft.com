import {Fade} from '@successtar/react-reveal';
import React, {ComponentPropsWithoutRef, useEffect, useRef, useState} from 'react';
import {photoList} from '../../data/photoList';
import {useAnalytics} from '../../misc/useAnalytics';
import useIntersectionObserver from '../../misc/useIntersectionObserver';
import useInterval from '../../misc/useInterval';
import {Utils} from '../../misc/Utils';
import {PhotoPreview} from './PhotoPreview';
import {GalleryBuilder, PhotoOnWall} from './GalleryBuilder';
import {Photo} from './Photo';
import {StyledPhotoGallery} from './StyledPhotoGallery';

interface Props extends ComponentPropsWithoutRef<'div'> {
  shouldReveal: boolean;
}

export const PhotoGallery: React.FC<Props> = props => {
  const analytics = useAnalytics();
  const visibilityRef = useRef<HTMLDivElement | null>(null);
  const visibilityObserver = useIntersectionObserver(visibilityRef, {threshold: 0.3});
  const [isAddingPhotosFinished, setIsAddingPhotosFinished] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [gallery, setGallery] = useState<GalleryBuilder>();
  const [lastAddedIndex, setLastAddedIndex] = useState(-1);
  const [lastTabHideTime, setLastTabHideTime] = useState(Date.now());
  const [photos, setPhotos] = useState<PhotoOnWall[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoOnWall>();
  const [shouldHideSelectedPhoto, setShouldHideSelectedPhoto] = useState(false);

  useEffect(() => {
    // Need to init stuff here explicitly because of hot reload
    const gallery = new GalleryBuilder({photoGapInPx: 26, photoWidthInPx: 150, useSmoothStart: true});
    setGallery(gallery);
    setPhotos([]);
    setLastAddedIndex(-1);
  }, []);

  // Watch for tab visibility change
  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [lastTabHideTime]); // deps of handleVisibilityChange

  // Need to initialize animation in the right moment
  useEffect(() => {
    if (!isInitialized && props.shouldReveal && visibilityObserver?.isIntersecting) {
      setIsInitialized(true);
    }
  }, [props.shouldReveal, visibilityObserver?.isIntersecting]);

  // Init time for adding new photos
  useInterval(
    () => {
      handleAddPhotoIntervalTick();
    },
    isInitialized && !isAddingPhotosFinished ? (photos.length < 30 ? 400 : 1000) : null,
  );

  // Set timer to disable adding new photos (optimization)
  useEffect(() => {
    if (photos.length > 500) {
      setIsAddingPhotosFinished(true);
    }
  }, [photos]);

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

  function handleVisibilityChange() {
    if (!document.hidden && isInitialized) {
      if (Date.now() - lastTabHideTime > 10000) {
        setIsInitialized(false);
        setTimeout(() => {
          setIsInitialized(true);
        }, 10);
      }
    } else {
      setLastTabHideTime(Date.now());
    }
  }

  function handlePhotoClick(photo: PhotoOnWall) {
    setSelectedPhoto(photo);

    // Hack for Safari
    if (!Utils.isChromium()) {
      setTimeout(() => {
        setShouldHideSelectedPhoto(true);
      }, 50);
    } else {
      setShouldHideSelectedPhoto(true);
    }

    analytics.trackEvent('PhotoGallery.photoClick', {photo: location.origin + '/' + photo.url});
  }

  function handlePhotoPreviewExit() {
    setSelectedPhoto(undefined);
    setShouldHideSelectedPhoto(false);
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
            photo === selectedPhoto && shouldHideSelectedPhoto ? (
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
