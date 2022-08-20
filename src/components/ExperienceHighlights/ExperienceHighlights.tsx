import React from 'react';
import {Fade} from '@successtar/react-reveal';
import {StyledExperienceHighlights} from './StyledExperienceHighlights';

interface Props {
  shouldReveal: boolean;
}

export const ExperienceHighlights: React.FC<Props> = props => {
  const year = new Date().getFullYear();

  return (
    <StyledExperienceHighlights.Wrapper>
      <ul>
        <Fade right when={props.shouldReveal}>
          <li>
            <b>{year - 2007} Years</b>
            <br />
            of Dev Experience
          </li>
        </Fade>
        <Fade right when={props.shouldReveal} delay={300}>
          <li>
            Primary Coding Language
            <br />
            <b>JavaScript/TypeScript</b>
          </li>
        </Fade>
        <Fade right when={props.shouldReveal} delay={600}>
          <li>
            <b>{year - 2012} Years</b>
            <br />
            of Remote Work Exp
          </li>
        </Fade>
        <Fade right when={props.shouldReveal} delay={900}>
          <li>
            Fluent
            <br />
            <b>English</b>
          </li>
        </Fade>
      </ul>
    </StyledExperienceHighlights.Wrapper>
  );
};
