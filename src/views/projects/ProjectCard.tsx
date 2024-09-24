import styled from "styled-components";
import React from "react";
import Image from "next/image";

export interface IProjectCard {
    imageSrc: string;
    title: string;
    desc: string
}

const ProjectCard = (props: IProjectCard) => {
    return (
        <ProjectCardStyle>
                <a href="#" className="image"><Image src={props.imageSrc}
                                                     width={500}
                                                     height={500}
                                                     alt="project_image"
                                                     data-position="center center"/></a>
                <div className="card-content">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <a href="generic.html" className="button">Learn more</a>
                </div>
        </ProjectCardStyle>

    )

}

const ProjectCardStyle = styled.section`
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    min-height: 22.5em;

    .image {
      background-position: center center;
    }

    .card-content {
      padding: 2rem;
      display: flex;
      flex-direction: column;
    }
`

export default ProjectCard;