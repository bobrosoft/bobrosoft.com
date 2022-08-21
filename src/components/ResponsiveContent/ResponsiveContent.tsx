import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${breakpoints.sm}) {
    align-items: unset;
    flex-direction: column;
  }
`;

export const ResponsiveContent: React.FC<PropsWithChildren> = props => {
  return <Wrapper>{props.children}</Wrapper>;
};
