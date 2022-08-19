import React, {useState} from 'react';
import {HelloMessage} from '../../components/HelloMessage/HelloMessage';
import {MyPhoto} from '../../components/MyPhoto/MyPhoto';
import {ResponsiveSection} from '../../components/ResponsiveSection/ResponsiveSection';

export const MainPage: React.FC = () => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(false);

  function handleOnFirstMessageTyped() {
    setIsFirstMessageTyped(true);
  }

  return (
    <ResponsiveSection maxWidth={'800px'}>
      <div style={{flex: 3}}>
        <HelloMessage onFirstMessageTyped={handleOnFirstMessageTyped} />
      </div>
      <div style={{flex: 0.5}}></div>
      <div style={{flex: 2}}>
        <MyPhoto isRevealed={isFirstMessageTyped} />
      </div>
    </ResponsiveSection>
  );
};
