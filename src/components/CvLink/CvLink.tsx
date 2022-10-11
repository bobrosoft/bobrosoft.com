import React from 'react';
import {Fade} from '@successtar/react-reveal';
import {RouteBuilder} from '../../misc/RouteBuilder';
import {useAnalytics} from '../../misc/useAnalytics';

interface Props {
  noDelay: boolean;
  shouldReveal: boolean;
}

export const CvLink: React.FC<Props> = props => {
  const analytics = useAnalytics();

  function handleCvClick() {
    analytics.trackEvent('CV.click', {place: 'up-to-date-cv', value: 100, currency: 'USD'});
  }

  return (
    <div className={'text-center'}>
      <Fade bottom when={props.shouldReveal} delay={props.noDelay ? 0 : 1600}>
        <a href={RouteBuilder.cv()} target={'_blank'} rel="noreferrer" onClick={handleCvClick}>
          Up-to-date CV
        </a>
      </Fade>
    </div>
  );
};
