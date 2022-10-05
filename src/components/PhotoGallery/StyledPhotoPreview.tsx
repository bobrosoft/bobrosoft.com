import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  perspective: 600px;

  &.shown {
    pointer-events: initial;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: opacity 0.6s;
  transition-delay: 0s;
  z-index: -10;

  &.shown {
    transition-delay: 0.8s;
    opacity: 0.6;
  }
`;

const Image = styled.img`
  box-sizing: initial;
  border: min(50px, 5vw) solid #fff;
  background-color: #aaaaaa;
  box-shadow: 0 0 20px black;

  @media (orientation: landscape) {
    height: 100%;
  }
  @media (orientation: portrait) {
    width: 100%;
  }

  max-width: 80vw;
  max-height: 80vh;
  z-index: 10;
  transform-style: preserve-3d;
  animation: PhotoPreview-Image-appear 800ms forwards;

  @keyframes PhotoPreview-Image-appear {
    0% {
      transform: translate3d(var(--tx), var(--ty), 0px) rotateY(16deg) rotateZ(3deg) scale(0.2);
    }
  }
`;

export const StyledPhotoPreview = {
  Wrapper,
  Backdrop,
  Image,
};
