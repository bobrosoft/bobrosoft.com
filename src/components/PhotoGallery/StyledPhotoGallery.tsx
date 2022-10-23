import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const Wrapper = styled.div<{height: number}>`
  height: ${props => props.height + 'px'};
  perspective: 600px;
`;

const AnimatedContainer = styled.div`
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
  left: 40vw;

  &.animate {
    animation: AnimatedContainer-scroll-sm 300s linear infinite;

    @media (min-width: ${breakpoints.sm}) {
      animation: AnimatedContainer-scroll 300s linear infinite;
    }

    @media (min-width: 1600px) {
      animation: AnimatedContainer-scroll-lg 300s linear infinite;
    }

    @media (min-width: 1900px) {
      animation: AnimatedContainer-scroll-xlg 300s linear infinite;
    }
  }

  @keyframes AnimatedContainer-scroll {
    0% {
      transform: rotateY(16deg) rotateZ(3deg) translateX(0);
    }

    100% {
      transform: rotateY(16deg) rotateZ(3deg) translateX(-10000px);
    }
  }

  // mobile version
  @keyframes AnimatedContainer-scroll-sm {
    0% {
      transform: rotateY(16deg) rotateZ(5deg) translateX(0);
    }

    100% {
      transform: rotateY(16deg) rotateZ(5deg) translateX(-10000px);
    }
  }

  @keyframes AnimatedContainer-scroll-lg {
    0% {
      transform: rotateY(13deg) rotateZ(3deg) translateX(0);
    }

    100% {
      transform: rotateY(13deg) rotateZ(3deg) translateX(-10000px);
    }
  }

  @keyframes AnimatedContainer-scroll-xlg {
    0% {
      transform: rotateY(10deg) rotateZ(3deg) translateX(0);
    }

    100% {
      transform: rotateY(10deg) rotateZ(3deg) translateX(-10000px);
    }
  }
`;

export const StyledPhotoGallery = {
  Wrapper,
  AnimatedContainer,
};
