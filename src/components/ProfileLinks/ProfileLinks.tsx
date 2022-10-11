import React from 'react';
import {Feather, GitHub, Linkedin} from 'react-feather';
import {RouteBuilder} from '../../misc/RouteBuilder';
import {useAnalytics} from '../../misc/useAnalytics';
import {StyledProfileLinks} from './StyledProfileLinks';

interface Props {
  place: string;
  fontSize?: number;
}

export const ProfileLinks: React.FC<Props> = ({fontSize, place}) => {
  const analytics = useAnalytics();

  function handleLinkClick(linkType: string) {
    if (linkType === 'cv') {
      analytics.trackEvent('CV.click', {place: place, value: 100, currency: 'USD'});
    }

    analytics.trackEvent('ProfileLinks.click', {linkType});
  }

  return (
    <StyledProfileLinks>
      <a
        className={'cv'}
        style={{fontSize}}
        href={RouteBuilder.cv()}
        target={'_blank'}
        rel="next noreferrer"
        onClick={() => handleLinkClick('cv')}
      >
        CV
      </a>
      <a
        href={RouteBuilder.linkedin()}
        target={'_blank'}
        rel="next noreferrer"
        onClick={() => handleLinkClick('linkedin')}
      >
        <Linkedin size={fontSize} />
      </a>
      <a href={RouteBuilder.github()} target={'_blank'} rel="next noreferrer" onClick={() => handleLinkClick('github')}>
        <GitHub size={fontSize} />
      </a>
      <a href={RouteBuilder.articles()} target={'_blank'} rel="noreferrer" onClick={() => handleLinkClick('articles')}>
        <Feather size={fontSize} />
      </a>
    </StyledProfileLinks>
  );
};

ProfileLinks.defaultProps = {
  fontSize: 24,
};
