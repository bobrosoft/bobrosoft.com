import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';
import {StyledHelloMessage} from './StyledHelloMessage';

interface Props {
  noDelay: boolean;
  onFirstMessageTyped?: () => void;
}

export const HelloMessage: React.FC<Props> = props => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(props.noDelay);

  return (
    <StyledHelloMessage.Wrapper aria-live="polite">
      <StyledHelloMessage.FirstMessage>
        {props.noDelay ? (
          <>
            Hi I'm
            <br />
            <h1 className="line-2">Vladimir Tolstikov</h1>
            <br />
            <h2 className="line-3">Senior Software Developer</h2>
          </>
        ) : (
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
                .typeString(`<br/><h2 class="line-3">Senior Software Developer</h2>`)
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
        )}
      </StyledHelloMessage.FirstMessage>
      <br />
      <StyledHelloMessage.SecondMessage>
        {isFirstMessageTyped && (
          <Typewriter
            options={{
              strings: [
                `Highly experienced in modern <b>Web technologies</b>. These days more focused on <b>Frontend Development</b> and <b>JavaScript</b>.`,
                `Good experience of making complex solutions from scratch, starting from software architecture till final deployment.`,
                `I believe that good Engineer can do anything!`,
                `My nickname is <b>Bobr</b>, using it in day-to-day work communications as well 🙃`,
              ],
              autoStart: true,
              loop: true,
              delay: props.noDelay ? 0 : 20,
              deleteSpeed: 0,
            }}
          />
        )}
      </StyledHelloMessage.SecondMessage>
    </StyledHelloMessage.Wrapper>
  );
};
