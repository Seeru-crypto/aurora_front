import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';

const Projects = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ProjectsStyle ref={ref} id='projects'>

      <h1>Projects</h1>
      <div className='project-card-container'>
        {projectData.map(card => (<ProjectCard key={card.title}
                                               tags={card.tags}
                                               codeRepository={card.codeRepository}
                                               liveInstance={card.liveInstance}
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

  @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenSm}) {
    .project-card-container {
      padding: 0 2rem;
    }
  }
`;

Projects.displayName = 'Projects main component';

export default Projects;