import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }

  .author {
    font-size: 1.4em;
  }
`;

export const StyledFooter = {
  Container,
};
