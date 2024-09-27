import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';

interface IProjects {
  ref: ForwardedRef<HTMLElement>;
}

const Projects = React.forwardRef ((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ProjectsStyle ref={ref} id='projects'>
      <h1>Projects</h1>
      {projectData.map(card => (<ProjectCard key={card.title}
                                             tags={card.tags}
                                             link={card.link}
                                             title={card.title}
                                             desc={card.desc}
                                             imageSrc={card.imageSrc}
      />))}
    </ProjectsStyle>

  );
});

const ProjectsStyle = styled.section`
  padding: 0 2rem;
`;

Projects.displayName="Projects main component"

export default Projects;