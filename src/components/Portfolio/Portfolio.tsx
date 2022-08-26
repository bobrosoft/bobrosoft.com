import React, {PropsWithChildren, useState} from 'react';
import {Fade} from '@successtar/react-reveal';
import {ExternalLink, GitHub} from 'react-feather';
import {Project} from '../../models/Project';
import {projects} from './projects';
import {StyledPortfolio} from './StyledPortfolio';

interface ItemProps {
  shouldReveal: boolean;
  project: Project;
  index: number;
}

const Item: React.FC<PropsWithChildren<ItemProps>> = ({shouldReveal, project, index}) => {
  return (
    <Fade bottom when={shouldReveal} force={true} delay={index * 200}>
      <StyledPortfolio.Project>
        <h3 className={'header'}>
          <a
            className={'title'}
            href={project.websiteUrl || ''}
            target={'_blank'}
            rel="noreferrer"
            onClick={e => {
              if (!project.websiteUrl) {
                e.preventDefault();
              }
            }}
          >
            {project.title}
          </a>
          <span className={'icons'}>
            {project.githubUrl && (
              <a href={project.githubUrl} target={'_blank'} rel="noreferrer">
                <GitHub size={16} />
              </a>
            )}
            {project.websiteUrl && (
              <a href={project.websiteUrl} target={'_blank'} rel="noreferrer">
                <ExternalLink size={16} />
              </a>
            )}
          </span>
        </h3>
        <p className={'description'}>{project.description}</p>
      </StyledPortfolio.Project>
    </Fade>
  );
};

interface Props {
  shouldReveal: boolean;
}

export const Portfolio: React.FC<Props> = props => {
  const [isHeaderRevealed, setIsHeaderRevealed] = useState(false);

  function handleHeaderReveal() {
    setIsHeaderRevealed(true);
  }

  return (
    <>
      <Fade bottom when={props.shouldReveal} onReveal={handleHeaderReveal}>
        <h2 className={'text-center'}>Noteworthy Projects</h2>
      </Fade>
      <StyledPortfolio.Grid>
        {projects.map((project, index) => (
          <Item key={project.title} shouldReveal={isHeaderRevealed} project={project} index={index} />
        ))}
      </StyledPortfolio.Grid>
    </>
  );
};
