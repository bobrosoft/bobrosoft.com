import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const Wrapper = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      margin: 20px 0 !important;
      width: 50%;
    }
  }

  li {
    margin: 30px 0;
    list-style: none;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;

    b {
      font-size: 1.5em;
      color: gold;
      text-shadow: 0 0 10px gold;
    }
  }
`;

export const StyledExperienceHighlights = {
  Wrapper,
};
