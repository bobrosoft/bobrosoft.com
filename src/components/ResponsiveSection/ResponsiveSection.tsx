import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const Wrapper = styled.div`
  margin: auto;
  padding: 40px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${breakpoints.sm}) {
    align-items: unset;
    flex-direction: column;
  }
`;

interface Props {
  maxWidth?: string;
}

export const ResponsiveSection: React.FC<PropsWithChildren<Props>> = props => {
  return <Wrapper style={{maxWidth: props.maxWidth}}>{props.children}</Wrapper>;
};
