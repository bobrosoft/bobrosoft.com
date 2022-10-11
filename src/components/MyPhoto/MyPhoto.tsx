import React, {useEffect, useState} from 'react';
import {Utils} from '../../misc/Utils';
import {ProfileLinks} from '../ProfileLinks/ProfileLinks';
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
        className={[isChromium ? 'chromium' : '', isClicked ? 'clicked' : '', 'bb_sft_vt'].join(' ')}
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
      <ProfileLinks place={'my-photo'} />
    </StyledMyPhoto.Wrapper>
  );
};

MyPhoto.defaultProps = {
  shouldReveal: false,
};
