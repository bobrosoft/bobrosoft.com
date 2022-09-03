import React from 'react';
import {CvLink} from '../../components/CvLink/CvLink';
import {ExperienceHighlights} from '../../components/ExperienceHighlights/ExperienceHighlights';
import {Footer} from '../../components/Footer/Footer';
import {Portfolio} from '../../components/Portfolio/Portfolio';
import {Section} from '../../components/Section/Section';
import {Skills} from '../../components/Skills/Skills';

interface Props {
  noDelay: boolean;
  shouldReveal: boolean;
}

const MainPageLazyLoadedContent: React.FC<Props> = ({noDelay, shouldReveal}) => {
  return (
    <>
      <Section>
        <ExperienceHighlights shouldReveal={shouldReveal} />
      </Section>
      <Section>
        <CvLink noDelay={noDelay} shouldReveal={shouldReveal} />
      </Section>
      <Section maxWidth={'1000px'}>
        <Skills shouldReveal={shouldReveal} />
      </Section>
      <Section maxWidth={'1000px'}>
        <Portfolio shouldReveal={shouldReveal} />
      </Section>
      <Section maxWidth={'960px'}>
        <Footer shouldReveal={shouldReveal} />
      </Section>
    </>
  );
};

export default MainPageLazyLoadedContent;
