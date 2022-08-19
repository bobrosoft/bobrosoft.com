import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const Wrapper = styled.div`
  min-height: 230px;
`;

export const FirstMessage = styled.div`
  h1,
  h2,
  h3 {
    display: inline-block;
    margin: unset;
  }

  .line-2 {
    font-size: 2em;
    font-weight: 600;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.8em;
    }

    // noinspection CssInvalidPropertyValue
    @supports (background-clip: text) or (-webkit-background-clip: text) {
      -webkit-text-fill-color: transparent;
      background: linear-gradient(-45deg, #83a0ef 7.09%, #ffffff 96.61%);
      -webkit-background-clip: text;
      background-clip: text;
    }
  }

  .line-3 {
    font-size: 1.3em;
    font-style: italic;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.2em;
    }
  }

  .Typewriter__cursor {
    display: inline-block;
    transform: scale(1.5, 1.4) translateY(-2px);
  }
`;

export const SecondMessage = styled.div`
  font-size: 1em;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.9em;
  }
`;

export const StyledHelloMessage = {
  Wrapper,
  FirstMessage,
  SecondMessage,
};
