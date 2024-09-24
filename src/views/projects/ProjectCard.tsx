import styled from "styled-components";
import React from "react";
import Image from "next/image";
import ProjectTag, {IProjectTag} from "./ProjectTag";

export interface IProjectCard {
    imageSrc: string;
    title: string;
    desc: string;
    tags: IProjectTag[]
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
                <div className="card-top">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <a href="generic.html" className="button">Learn more</a>
                </div>
                <div className="tags-container">
                    {props.tags.map(tag => <ProjectTag
                        key={tag.name}
                        name={tag.name}
                        type={tag.type} />)}
                </div>
            </div>
        </ProjectCardStyle>
    )
}

const ProjectCardStyle = styled.section`
  max-width: 80%;
  padding: .5rem 0;
  border-bottom: 1px solid green;
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
    justify-content: space-between;
  }

  .tags-container {
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }
`

export default ProjectCard;