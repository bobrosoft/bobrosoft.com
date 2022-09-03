import React, {PropsWithChildren, useState} from 'react';
import {Fade} from '@successtar/react-reveal';
import {Utils} from '../../misc/Utils';
import {SkillSet} from '../../models/SkillSet';
import {Grid} from '../Grid/Grid';
import {skillSets} from './skillSets';
import {StyledSkills} from './StyledSkills';

interface ItemProps {
  shouldReveal: boolean;
  skillSet: SkillSet;
  index: number;
}

const Item: React.FC<PropsWithChildren<ItemProps>> = ({shouldReveal, skillSet, index}) => {
  return (
    <Fade bottom when={shouldReveal} force={true} delay={index * 200}>
      <StyledSkills.SkillSet>
        <h3 className={'header'}>{skillSet.title}</h3>
        <div className={'content'}>
          {skillSet.asList ? (
            <ul className={'list'}>
              {skillSet.items.map(item => (
                <li
                  key={item.title}
                  className={'item zoom-on-hover'}
                  style={{width: item.widthPercents ? item.widthPercents + '%' : 'unset'}}
                >
                  <span
                    className={['badge', item.color && Utils.isLightColor(item.color) ? 'contrast' : ''].join(' ')}
                    style={{backgroundColor: item.color || ''}}
                  >
                    {item.title}
                  </span>
                  {item.expYears ? <span className={'exp'}>{item.expYears} Years</span> : <></>}
                </li>
              ))}
            </ul>
          ) : (
            <div className={['badges', skillSet.asList ? 'list' : ''].join(' ')}>
              {skillSet.items.map(item => (
                <span
                  key={item.title}
                  className={[
                    'badge',
                    'zoom-on-hover',
                    item.color && Utils.isLightColor(item.color) ? 'contrast' : '',
                  ].join(' ')}
                  style={{backgroundColor: item.color || ''}}
                >
                  {item.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </StyledSkills.SkillSet>
    </Fade>
  );
};

interface Props {
  shouldReveal: boolean;
}

export const Skills: React.FC<Props> = props => {
  const [isHeaderRevealed, setIsHeaderRevealed] = useState(false);

  function handleHeaderReveal() {
    setIsHeaderRevealed(true);
  }

  return (
    <>
      <Fade bottom when={props.shouldReveal} onReveal={handleHeaderReveal}>
        <h2 className={'text-center'}>Skills</h2>
      </Fade>
      <Grid>
        {skillSets.map((skillSet, index) => (
          <Item key={skillSet.title} shouldReveal={isHeaderRevealed} skillSet={skillSet} index={index} />
        ))}
      </Grid>
    </>
  );
};
