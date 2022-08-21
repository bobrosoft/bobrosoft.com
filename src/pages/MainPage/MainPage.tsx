import React, {useState} from 'react';
import {HelloMessage} from '../../components/HelloMessage/HelloMessage';
import {MyPhoto} from '../../components/MyPhoto/MyPhoto';
import {ResponsiveContent} from '../../components/ResponsiveContent/ResponsiveContent';
import {Section} from '../../components/Section/Section';

const MainPageLazyLoadedContent = React.lazy(() => import('./MainPageLazyLoadedContent'));

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
      <MainPageLazyLoadedContent shouldReveal={isPhotoRevealed} />
    </>
  );
};
