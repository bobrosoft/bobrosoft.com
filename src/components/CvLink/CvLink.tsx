import React from 'react';
import {Fade} from '@successtar/react-reveal';

interface Props {
  shouldReveal: boolean;
}

export const CvLink: React.FC<Props> = props => {
  return (
    <div className={'text-center'}>
      <Fade bottom when={props.shouldReveal} delay={1600}>
        <a href={'https://my.visualcv.com/vladimir-tolstikov/'} target={'_blank'} rel="noreferrer">
          Up-to-date CV
        </a>
      </Fade>
    </div>
  );
};
