import styled from 'styled-components';

const Wrapper = styled.div`
  transition: filter 2s;
  filter: blur(15px);
  will-change: filter;

  &.revealed {
    filter: blur(0px);
  }

  svg .c1 {
    animation: MyPhoto_c1 1.3s alternate infinite ease-in-out, MyPhoto_moveX 4s alternate infinite ease-in-out,
      MyPhoto_moveY 7s alternate infinite ease-in-out;
  }

  svg .c2 {
    animation: MyPhoto_c2 3.7s alternate infinite ease-in-out;
  }

  svg .c3 {
    animation: MyPhoto_c3 3s alternate infinite ease-in-out, MyPhoto_moveX2 2s alternate infinite ease-in-out,
      MyPhoto_moveY2 3.5s alternate infinite ease-in-out;
    animation-delay: -1.7s;
  }

  @keyframes MyPhoto_moveX {
    0% {
      cx: 0.4;
    }
    100% {
      cx: 0.6;
    }
  }

  @keyframes MyPhoto_moveY {
    0% {
      cy: 0.4;
    }
    100% {
      cy: 0.6;
    }
  }

  @keyframes MyPhoto_c1 {
    0% {
      r: 0.3;
    }
    100% {
      r: 0.4;
    }
  }

  @keyframes MyPhoto_c2 {
    0% {
      r: 0.4;
    }
    100% {
      r: 0.5;
    }
  }

  @keyframes MyPhoto_c3 {
    0% {
      r: 0.05;
    }
    100% {
      r: 0.1;
    }
  }

  @keyframes MyPhoto_moveX2 {
    0% {
      cx: 0.2;
    }
    100% {
      cx: 0.8;
    }
  }

  @keyframes MyPhoto_moveY2 {
    0% {
      cy: 0.2;
    }
    100% {
      cy: 0.8;
    }
  }

  @keyframes MyPhoto_rotate {
    0% {
      clip-path: polygon(
        7.32% 20.2%,
        25.47% 6.03%,
        37.03% 11.94%,
        48.31% 7.95%,
        63.3% 13.11%,
        79.39% 6.03%,
        93.15% 18.82%,
        97.27% 33.68%,
        91.5% 50.5%,
        96.31% 60.09%,
        90.12% 79.07%,
        76.37% 84.84%,
        65.64% 96.95%,
        48.03% 89.52%,
        42.39% 96.95%,
        13.78% 90.48%,
        4.01% 72.88%,
        12.82% 58.44%,
        8.14% 45.09%,
        12.27% 31.75%,
        7.32% 20.2%
      );
    }
    33% {
      clip-path: polygon(
        7.73% 11%,
        22.17% 6.03%,
        31.39% 14.69%,
        45.28% 4.79%,
        67.7% 6.98%,
        78.98% 11.39%,
        92.32% 9.33%,
        91.62% 28.04%,
        96% 43.44%,
        97.96% 62.7%,
        88.6% 71.6%,
        93.32% 89.03%,
        66.46% 89.94%,
        50.99% 97%,
        39.91% 89.66%,
        12.82% 94.75%,
        6.9% 73.02%,
        10.75% 56.78%,
        4.01% 43.58%,
        15.29% 35.27%,
        7.73% 11%
      );
    }
    66% {
      clip-path: polygon(
        12.82% 14.14%,
        22.03% 10.71%,
        31.8% 6.58%,
        44.87% 10.84%,
        65.64% 4.92%,
        76.92% 14%,
        90.67% 14%,
        97.27% 22.53%,
        90.81% 44.27%,
        93.7% 58.99%,
        95.35% 73.7%,
        85.31% 87.05%,
        72.52% 92%,
        53.12% 86.63%,
        32.73% 94.77%,
        14.06% 86.08%,
        9.65% 72.88%,
        7.04% 56.65%,
        11.3% 44.41%,
        8.69% 32.99%,
        12.82% 14.14%
      );
    }
    100% {
      clip-path: polygon(
        7.32% 20.2%,
        25.47% 6.03%,
        37.03% 11.94%,
        48.31% 7.95%,
        63.3% 13.11%,
        79.39% 6.03%,
        93.15% 18.82%,
        97.27% 33.68%,
        91.5% 50.5%,
        96.31% 60.09%,
        90.12% 79.07%,
        76.37% 84.84%,
        65.64% 96.95%,
        48.03% 89.52%,
        42.39% 96.95%,
        13.78% 90.48%,
        4.01% 72.88%,
        12.82% 58.44%,
        8.14% 45.09%,
        12.27% 31.75%,
        7.32% 20.2%
      );
    }
  }

  @keyframes MyPhoto_rotate2 {
    0% {
      clip-path: polygon(
        50.5% 2.97%,
        64.54% 4.1%,
        75.68% 8.78%,
        82.97% 17.45%,
        91.03% 25.21%,
        95.21% 39.32%,
        98.03% 50.5%,
        96.41% 62.8%,
        91.66% 74.26%,
        82.97% 82.51%,
        74.26% 91.66%,
        64.95% 96.95%,
        50.5% 98.03%,
        37.16% 94.75%,
        25.06% 90.97%,
        16.89% 84.11%,
        10.62% 74.12%,
        5.56% 62.75%,
        2.97% 51.56%,
        2.97% 39.04%,
        8.83% 26.66%,
        15.84% 15.66%,
        26.74% 9.34%,
        38.4% 6.58%,
        50.5% 2.97%
      );
    }
    33% {
      clip-path: polygon(
        50.5% 3.96%,
        63.44% 4.79%,
        78.77% 8.45%,
        86.68% 14.56%,
        93.7% 28.72%,
        95.21% 36.7%,
        98.34% 48.15%,
        97.41% 64.08%,
        90.67% 73.15%,
        84.11% 84.11%,
        75.13% 92.82%,
        62.8% 96.41%,
        52.01% 97.83%,
        38.2% 96.41%,
        24.37% 91.72%,
        15.29% 83.75%,
        7.87% 73.57%,
        5.93% 63.59%,
        4.29% 51.97%,
        4.59% 38.2%,
        8.83% 25.42%,
        17.49% 15.24%,
        26.71% 8.23%,
        38.27% 5.89%,
        50.5% 3.96%
      );
    }
    66% {
      clip-path: polygon(
        49.92% 3.28%,
        62.8% 4.59%,
        72.52% 10.43%,
        84.11% 16.89%,
        92.46% 25.29%,
        94.94% 37.25%,
        96.86% 50.5%,
        96.41% 62.8%,
        90.81% 72.6%,
        84.76% 86.08%,
        72.38% 91.31%,
        63.16% 95.02%,
        49.41% 97.36%,
        34.83% 95.96%,
        24.23% 90.21%,
        14.61% 83.19%,
        9.93% 74.12%,
        3.19% 64.08%,
        4.15% 50.5%,
        5% 35.07%,
        10.07% 23.91%,
        16.89% 16.89%,
        28.09% 11.8%,
        36.2% 4.82%,
        49.92% 3.28%
      );
    }
    100% {
      clip-path: polygon(
        50.5% 2.97%,
        64.54% 4.1%,
        75.68% 8.78%,
        82.97% 17.45%,
        91.03% 25.21%,
        95.21% 39.32%,
        98.03% 50.5%,
        96.41% 62.8%,
        91.66% 74.26%,
        82.97% 82.51%,
        74.26% 91.66%,
        64.95% 96.95%,
        50.5% 98.03%,
        37.16% 94.75%,
        25.06% 90.97%,
        16.89% 84.11%,
        10.62% 74.12%,
        5.56% 62.75%,
        2.97% 51.56%,
        2.97% 39.04%,
        8.83% 26.66%,
        15.84% 15.66%,
        26.74% 9.34%,
        38.4% 6.58%,
        50.5% 2.97%
      );
    }
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  padding-bottom: 100%;
  background: #4a70ce;
  cursor: pointer;

  &.chromium {
    clip-path: url(#MyPhoto_clipPath);
  }

  &:not(.chromium) {
    animation: MyPhoto_rotate2 2s infinite linear;
    margin-bottom: 20px;
  }

  &.clicked {
    animation: MyPhoto_shake 1s ease 0s 1 normal forwards;
  }
  &:not(.chromium).clicked {
    animation: MyPhoto_rotate2 2s infinite linear, MyPhoto_shake 1s ease 0s 1 normal forwards;
  }

  @keyframes MyPhoto_shake {
    0% {
      transform-origin: 50% 50%;
      transform: translateX(0%) scale(1);
    }

    15% {
      transform: translateX(-30px) rotate(-6deg) scale(1.2);
    }

    30% {
      transform: translateX(15px) rotate(6deg) scale(1.3);
    }

    45% {
      transform: translateX(-15px) rotate(-3.6deg) scale(1.2);
    }

    60% {
      transform: translateX(9px) rotate(2.4deg);
    }

    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;

const Photo = styled.img`
  display: block;
  position: absolute;
  top: 8%;
  left: 8%;
  width: 84%;
  height: 84%;
  background: #bdb671;
  content: url('images/my-photo.jpg');
  object-fit: cover;

  &.chromium {
    clip-path: url(#MyPhoto_clipPath);
  }

  &:not(.chromium) {
    animation: MyPhoto_rotate2 1.83s infinite linear;
  }
`;

export const StyledMyPhoto = {
  Wrapper,
  PhotoContainer,
  Photo,
};
