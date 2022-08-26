import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const Grid = styled.div`
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

const Project = styled.div`
  padding: 14px 16px;
  height: 100%;
  //background-color: rgba(255, 255, 255, 0.03);
  background-color: #1f315d;
  border-radius: 10px;

  .header {
    margin: 0;
    display: flex;
    align-items: center;

    .title {
      flex: 1;
      text-decoration: none;
    }

    .icons {
      & > * {
        margin-left: 10px;
        vertical-align: middle;
      }
    }
  }

  .description {
    font-size: 0.9em;
  }
`;

export const StyledPortfolio = {
  Grid,
  Project,
};
