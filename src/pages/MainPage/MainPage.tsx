import React, {useState} from 'react';
import {HelloMessage} from '../../components/HelloMessage/HelloMessage';
import {MyPhoto} from '../../components/MyPhoto/MyPhoto';
import {ResponsiveContent} from '../../components/ResponsiveContent/ResponsiveContent';
import {Section} from '../../components/Section/Section';
import {Utils} from '../../misc/Utils';

const MainPageLazyLoadedContent = React.lazy(() => import('./MainPageLazyLoadedContent'));
const noDelay = Utils.isBot();

export const MainPage: React.FC = () => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(noDelay);
  const [isPhotoRevealed, setIsPhotoRevealed] = useState(noDelay);

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
            <HelloMessage noDelay={noDelay} onFirstMessageTyped={handleOnFirstMessageTyped} />
          </div>
          <div style={{flex: 0.5}}></div>
          <div style={{flex: 2}}>
            <MyPhoto shouldReveal={isFirstMessageTyped} onRevealed={handlePhotoRevealed} />
          </div>
        </ResponsiveContent>
      </Section>
      <MainPageLazyLoadedContent noDelay={noDelay} shouldReveal={isPhotoRevealed} />
    </>
  );
};
