import React, {useState} from 'react';
import {ExperienceHighlights} from '../../components/ExperienceHighlights/ExperienceHighlights';
import {HelloMessage} from '../../components/HelloMessage/HelloMessage';
import {MyPhoto} from '../../components/MyPhoto/MyPhoto';
import {ResponsiveSection} from '../../components/ResponsiveSection/ResponsiveSection';

export const MainPage: React.FC = () => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(false);
  const [isPhotoRevealed, setIsPhotoRevealed] = useState(false);

  function handleOnFirstMessageTyped() {
    setIsFirstMessageTyped(true);
  }

  function handlePhotoRevealed() {
    setIsPhotoRevealed(true);
  }

  return (
    <>
      <ResponsiveSection>
        <div style={{flex: 3}}>
          <HelloMessage onFirstMessageTyped={handleOnFirstMessageTyped} />
        </div>
        <div style={{flex: 0.5}}></div>
        <div style={{flex: 2}}>
          <MyPhoto shouldReveal={isFirstMessageTyped} onRevealed={handlePhotoRevealed} />
        </div>
      </ResponsiveSection>
      <ResponsiveSection>
        <div style={{flex: 1}}>
          <ExperienceHighlights shouldReveal={isPhotoRevealed} />
        </div>
      </ResponsiveSection>
    </>
  );
};
