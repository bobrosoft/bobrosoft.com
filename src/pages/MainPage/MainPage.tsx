import React, {useState} from 'react';
import {ExperienceHighlights} from '../../components/ExperienceHighlights/ExperienceHighlights';
import {HelloMessage} from '../../components/HelloMessage/HelloMessage';
import {MyPhoto} from '../../components/MyPhoto/MyPhoto';
import {Portfolio} from '../../components/Portfolio/Portfolio';
import {ResponsiveContent} from '../../components/ResponsiveContent/ResponsiveContent';
import {Section} from '../../components/Section/Section';

export const MainPage: React.FC = () => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(false);
  const [isPhotoRevealed, setIsPhotoRevealed] = useState(false);

  function handleOnFirstMessageTyped() {
    setIsFirstMessageTyped(true);
  }

  function handlePhotoRevealed() {
    setTimeout(() => {
      setIsPhotoRevealed(true);
    }, 600);
  }

  return (
    <>
      <Section>
        <ResponsiveContent>
          <div style={{flex: 3}}>
            <HelloMessage onFirstMessageTyped={handleOnFirstMessageTyped} />
          </div>
          <div style={{flex: 0.5}}></div>
          <div style={{flex: 2}}>
            <MyPhoto shouldReveal={isFirstMessageTyped} onRevealed={handlePhotoRevealed} />
          </div>
        </ResponsiveContent>
      </Section>
      <Section>
        <ExperienceHighlights shouldReveal={isPhotoRevealed} />
      </Section>
      <Section>
        <Portfolio shouldReveal={isPhotoRevealed} />
      </Section>
    </>
  );
};
