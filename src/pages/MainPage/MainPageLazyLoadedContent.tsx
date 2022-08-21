import React from 'react';
import {CvLink} from '../../components/CvLink/CvLink';
import {ExperienceHighlights} from '../../components/ExperienceHighlights/ExperienceHighlights';
import {Portfolio} from '../../components/Portfolio/Portfolio';
import {Section} from '../../components/Section/Section';

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
      <Section>
        <Portfolio shouldReveal={shouldReveal} />
      </Section>
    </>
  );
};

export default MainPageLazyLoadedContent;
