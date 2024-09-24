import React, {ForwardedRef} from "react";
import styled from "styled-components";
import ProjectCard, {IProjectCard} from "./ProjectCard";
import {projectData} from "./projectData";

interface IProjects {
    ref: ForwardedRef<HTMLElement>
}

const Projects = (props: IProjects) => {
    const data: IProjectCard[] = projectData;
    return (
        <ProjectsStyle ref={props.ref} id="projects">
            <h1>Projects</h1>

            {data.map(card => (<ProjectCard key={card.title}
                                            title={card.title}
                                            desc={card.desc}
                                            imageSrc={card.imageSrc}
            />) )}
        </ProjectsStyle>

    )
}

const ProjectsStyle = styled.section`
  padding: 0 1rem;  
  //.project-card {
  //    border: 1px solid green;
  //    display: flex;
  //    flex-direction: row;
  //    min-height: 22.5em;
  //    
  //    .image {
  //      background-position: center center;
  //    }
  //    
  //    .card-content {
  //      padding: 2rem;
  //      display: flex;
  //      flex-direction: column;
  //      //justify-content: center;
  //      //align-items: center;
  //    }
  //  }
`

export default Projects;