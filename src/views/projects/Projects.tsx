import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';
import Wave from "./Wave.svg"

const Projects = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ProjectsStyle ref={ref} id='projects'>
      <div className='custom-shape-divider-top-1727521972'>
        <Wave className='shape-fill' />
      </div>
      <h1>Projects</h1>
      <div className='project-card-container'>
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
  background-color: ${(props) => props.theme.backgroundAlternative};

  .custom-shape-divider-top-1727521972 svg {
    padding: 0;
    position: relative;
    display: block;
    width: calc(130% + 1.3px);
    height: 98px;
  }

  .custom-shape-divider-top-1727521972 .shape-fill {
    //fill: red;
    fill: ${(props) => props.theme.background};
  }

  h1 {
    padding: 0 4rem;
  }

  .project-card-container {
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

Projects.displayName = 'Projects main component';

export default Projects;