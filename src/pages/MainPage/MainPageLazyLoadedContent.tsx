import React from 'react';
import {CvLink} from '../../components/CvLink/CvLink';
import {ExperienceHighlights} from '../../components/ExperienceHighlights/ExperienceHighlights';
import {Portfolio} from '../../components/Portfolio/Portfolio';
import {Section} from '../../components/Section/Section';
import {Skills} from '../../components/Skills/Skills';

interface Props {
  shouldReveal: boolean;
}

const MainPageLazyLoadedContent: React.FC<Props> = ({shouldReveal}) => {
  return (
    <>
      <Section>
        <ExperienceHighlights shouldReveal={shouldReveal} />
      </Section>
      <Section>
        <CvLink shouldReveal={shouldReveal} />
      </Section>
      <Section maxWidth={'1000px'}>
        <Skills shouldReveal={shouldReveal} />
      </Section>
      <Section maxWidth={'1000px'}>
        <Portfolio shouldReveal={shouldReveal} />
      </Section>
    </>
  );
};

export default MainPageLazyLoadedContent;
