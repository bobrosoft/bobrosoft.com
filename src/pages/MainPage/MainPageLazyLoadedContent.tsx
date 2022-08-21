import React, {useState} from 'react';
import {CvLink} from '../../components/CvLink/CvLink';
import {ExperienceHighlights} from '../../components/ExperienceHighlights/ExperienceHighlights';
import {HelloMessage} from '../../components/HelloMessage/HelloMessage';
import {MyPhoto} from '../../components/MyPhoto/MyPhoto';
import {Portfolio} from '../../components/Portfolio/Portfolio';
import {ResponsiveContent} from '../../components/ResponsiveContent/ResponsiveContent';
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
