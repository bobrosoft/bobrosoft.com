import React from 'react';
import {Feather, GitHub, Linkedin} from 'react-feather';
import {RouteBuilder} from '../../misc/RouteBuilder';
import {StyledProfileLinks} from './StyledProfileLinks';

interface Props {
  fontSize?: number;
}

export const ProfileLinks: React.FC<Props> = ({fontSize}) => {
  return (
    <StyledProfileLinks>
      <a className={'cv'} style={{fontSize}} href={RouteBuilder.cv()} target={'_blank'} rel="next noreferrer">
        CV
      </a>
      <a href={RouteBuilder.linkedin()} target={'_blank'} rel="next noreferrer">
        <Linkedin size={fontSize} />
      </a>
      <a href={RouteBuilder.github()} target={'_blank'} rel="next noreferrer">
        <GitHub size={fontSize} />
      </a>
      <a href={RouteBuilder.articles()} target={'_blank'} rel="noreferrer">
        <Feather size={fontSize} />
      </a>
    </StyledProfileLinks>
  );
};

ProfileLinks.defaultProps = {
  fontSize: 24,
};
