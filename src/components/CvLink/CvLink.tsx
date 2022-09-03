import React from 'react';
import {Fade} from '@successtar/react-reveal';
import {RouteBuilder} from '../../misc/RouteBuilder';

interface Props {
  noDelay: boolean;
  shouldReveal: boolean;
}

export const CvLink: React.FC<Props> = props => {
  return (
    <div className={'text-center'}>
      <Fade bottom when={props.shouldReveal} delay={props.noDelay ? 0 : 1600}>
        <a href={RouteBuilder.cv()} target={'_blank'} rel="noreferrer">
          Up-to-date CV
        </a>
      </Fade>
    </div>
  );
};
