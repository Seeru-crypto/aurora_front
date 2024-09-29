import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';

const Projects = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <ProjectsStyle ref={ref} id='projects'>
      <div className='custom-shape-divider-top-1727521972'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'></path>
        </svg>
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