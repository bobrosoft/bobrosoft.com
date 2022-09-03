import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template: auto / 33% 33% 33%;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template: auto / 50% 50%;
  }

  @media (max-width: 500px) {
    grid-template: auto / auto;
  }
`;
