import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import { ProjectInterface, TechTypes } from '../../lib/load-data';
import Archive from './Archive';
import Card from './Card';

export interface ShowcaseProps {
  projects: ProjectInterface[];
  techTypes: TechTypes;
}

const Showcase = React.forwardRef(
  ({ showcaseProps: workProps }: { showcaseProps: ShowcaseProps }, ref: ForwardedRef<HTMLElement>) => {
    const showcaseList: ProjectInterface[] = workProps.projects.filter((project) => project.showcase);
    const { SHOWCASE_TITLE } = data.text;

    return (
      <ShowcaseStyles ref={ref} id="showcase">
        <h1>{SHOWCASE_TITLE}</h1>
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
  border: 1px solid var(--primary-color);
  transition: linear 0.25s;
  padding: 1rem;
  width: 100%;

  .workCards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    .workCards {
      flex-direction: column;
    }
  }
`;
