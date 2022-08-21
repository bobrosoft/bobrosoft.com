import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  padding: 40px;
  max-width: 800px;
`;

interface Props {
  maxWidth?: string;
}

export const Section: React.FC<PropsWithChildren<Props>> = props => {
  return <Wrapper style={{maxWidth: props.maxWidth}}>{props.children}</Wrapper>;
};
