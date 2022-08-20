import React, {useEffect, useState} from 'react';
import {Feather, GitHub, Linkedin} from 'react-feather';
import {Utils} from '../../misc/Utils';
import {StyledMyPhoto} from './StyledMyPhoto';

const isChromium = Utils.isChromium();

interface Props {
  shouldReveal: boolean;
  onRevealed?: () => void;
}

export const MyPhoto: React.FC<Props> = props => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (props.shouldReveal) {
      setTimeout(() => {
        props.onRevealed?.();
      }, 2000);
    }
  }, [props.shouldReveal]);

  function handleOnClick() {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  }

  return (
    <StyledMyPhoto.Wrapper className={[props.shouldReveal ? 'revealed' : ''].join(' ')}>
      <StyledMyPhoto.PhotoContainer
        className={[isChromium ? 'chromium' : '', isClicked ? 'clicked' : ''].join(' ')}
        onClick={handleOnClick}
      >
        <StyledMyPhoto.Photo
          className={isChromium ? 'chromium' : ''}
          alt={'Photo of Vladimir Tolstikov Software Developer'}
        />
      </StyledMyPhoto.PhotoContainer>
      {isChromium && (
        <svg width="0" height="0" viewBox="0 0 100 100">
          <defs>
            <clipPath id="MyPhoto_clipPath" clipPathUnits="objectBoundingBox">
              <circle className="c1" cx="0.4" cy="0.5" r="0.4" />
              <circle className="c2" cx="0.5" cy="0.5" r="0.4" />
              <circle className="c3" cx="0.5" cy="0.5" r="0.4" />
            </clipPath>
          </defs>
        </svg>
      )}
      <StyledMyPhoto.Links>
        <a
          className={'cv'}
          href={'https://my.visualcv.com/vladimir-tolstikov/'}
          target={'_blank'}
          rel="next noreferrer"
        >
          CV
        </a>
        <a href={'https://linkedin.com/in/bobrosoft'} target={'_blank'} rel="next noreferrer">
          <Linkedin />
        </a>
        <a href={'https://github.com/bobrosoft'} target={'_blank'} rel="next noreferrer">
          <GitHub />
        </a>
        <a href={'https://medium.com/@vladimirtolstikov/latest'} target={'_blank'} rel="noreferrer">
          <Feather />
        </a>
      </StyledMyPhoto.Links>
    </StyledMyPhoto.Wrapper>
  );
};

MyPhoto.defaultProps = {
  shouldReveal: false,
};
