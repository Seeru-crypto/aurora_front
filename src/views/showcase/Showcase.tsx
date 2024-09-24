import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { ProjectInterface } from '../../lib/load-data';
import Archive from './Archive';
import Card from './Card';
import { LABELS, Tech } from '../../data';

export interface ShowcaseProps {
  projects: ProjectInterface[];
  techTypes: Tech[];
}

const Showcase = React.forwardRef(
  ({ showcaseProps: workProps }: { showcaseProps: ShowcaseProps }, ref: ForwardedRef<HTMLElement>) => {
    const showcaseList: ProjectInterface[] = workProps.projects.filter((project) => project.showcase);

    return (
      <ShowcaseStyles ref={ref} id="showcase">
        <h1>Projects</h1>
        <div className={'workCards'}>
          {showcaseList.map((project, index) => (
            <Card key={index} project={project} techTypes={workProps.techTypes} />
          ))}
        </div>
        <Archive projects={workProps.projects.filter((project) => !project.showcase)} />
      </ShowcaseStyles>
    );
  }
);

Showcase.displayName = 'Showcase';

export default Showcase;

const ShowcaseStyles = styled.section`
  .workCards {
    align-items: flex-start;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 1200px) {
    .workCards {
      flex-direction: column;
    }
  }
`;
