import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';
import {StyledHelloMessage} from './StyledHelloMessage';

interface Props {
  onFirstMessageTyped?: () => void;
}

export const HelloMessage: React.FC<Props> = props => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(false);

  return (
    <StyledHelloMessage.Wrapper aria-live="polite">
      <StyledHelloMessage.FirstMessage>
        <Typewriter
          options={{
            delay: 50,
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(500)
              .typeString(`Hi`)
              .pauseFor(700)
              .typeString(`, I\'m<br/><h1 class="line-2">Vladimir Tolstikov</h1>`)
              .pauseFor(700)
              .typeString(`<br/><h2 class="line-3">Full Stack Web Developer</h2>`)
              .callFunction(() => {
                props.onFirstMessageTyped?.();
              })
              .pauseFor(1500)
              .callFunction(state => {
                state.elements.cursor.style.display = 'none';
                typewriter.stop();

                setIsFirstMessageTyped(true);
              })
              .start();
          }}
        />
      </StyledHelloMessage.FirstMessage>
      <br />
      <StyledHelloMessage.SecondMessage>
        {isFirstMessageTyped && (
          <Typewriter
            options={{
              strings: [
                `Highly experienced in modern Web technologies. These days more focused on <b>Frontend Development</b> and <b>JavaScript</b>.`,
                `Good experience of making complex solutions from scratch, starting from software architecture till final deployment.`,
                `I believe that good Engineer can do anything!`,
              ],
              autoStart: true,
              loop: true,
              delay: 20,
              deleteSpeed: 0,
            }}
          />
        )}
      </StyledHelloMessage.SecondMessage>
    </StyledHelloMessage.Wrapper>
  );
};
