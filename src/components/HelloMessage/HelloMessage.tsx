import React, {useEffect, useRef, useState} from 'react';
import Typewriter, {TypewriterClass} from 'typewriter-effect';
import {StyledHelloMessage} from './StyledHelloMessage';

interface Props {
  noDelay: boolean;
  onFirstMessageTyped?: () => void;
}

export const HelloMessage: React.FC<Props> = props => {
  const [isFirstMessageTyped, setIsFirstMessageTyped] = useState(props.noDelay);
  const [secondTypewriter, setSecondTypewriter] = useState<TypewriterClass>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // CARD-18: [App] Optimize Typewriter usage
  useEffect(() => {
    if (secondTypewriter) {
      const options = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(wrapperRef.current as HTMLDivElement);

      return () => {
        if (wrapperRef.current) {
          observer.unobserve(wrapperRef.current as HTMLDivElement);
          observer.disconnect();
        }
      };
    }
  }, [secondTypewriter]);

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    if (entries[0]) {
      if (entries[0].isIntersecting) {
        secondTypewriter?.start();
      } else {
        secondTypewriter?.pause();
      }
    }
  }

  return (
    <StyledHelloMessage.Wrapper aria-live="polite" ref={wrapperRef}>
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
            onInit={typewriter => {
              setSecondTypewriter(typewriter);
            }}
          />
        )}
      </StyledHelloMessage.SecondMessage>
    </StyledHelloMessage.Wrapper>
  );
};
