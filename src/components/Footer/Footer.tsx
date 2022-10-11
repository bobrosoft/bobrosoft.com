import React from 'react';
import {Fade} from '@successtar/react-reveal';
import {ProfileLinks} from '../ProfileLinks/ProfileLinks';
import {StyledFooter} from './StyledFooter';

interface Props {
  shouldReveal: boolean;
}

export const Footer: React.FC<Props> = props => {
  return (
    <Fade when={props.shouldReveal}>
      <StyledFooter.Container>
        <div>
          <p>
            Design and Development
            <br />
            <a href={'https://bobrosoft.com'} className={'author'}>
              Vladimir Tolstikov
            </a>
          </p>
        </div>
        <div className={'p'}>
          <ProfileLinks place={'footer'} fontSize={20} />
        </div>
        <div>
          <p>© 2022 bobrosoft.com</p>
        </div>
      </StyledFooter.Container>
    </Fade>
  );
};
