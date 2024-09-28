import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';

const Projects = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ProjectsStyle ref={ref} id='projects'>
      <h1>Projects</h1>
      <div className="project-card-container">
        {projectData.map(card => (<ProjectCard key={card.title}
                                               tags={card.tags}
                                               link={card.link}
                                               title={card.title}
                                               desc={card.desc}
                                               imageSrc={card.imageSrc}
                                               alternativeImageSrc={card.alternativeImageSrc}
        />))}
      </div>
    </ProjectsStyle>

  );
});

const ProjectsStyle = styled.section`
  padding: 0 4rem;
  background-color: ${(props) => props.theme.backgroundAlternative};
  
  .project-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

Projects.displayName = 'Projects main component';

export default Projects;