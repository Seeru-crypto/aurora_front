import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ProjectTag, { IProjectTag } from './ProjectTag';
import Button from '../../components/util/Button';

export interface IProjectCard {
    imageSrc: string;
    title: string;
    desc: string;
    tags: IProjectTag[];
    link: string
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
                    <Button> <a target="_blank" href={props.link} className="nav-button">github</a></Button>

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
    gap: 1rem;
  }
    
    .nav-button {
        text-decoration: none;
        color: inherit;
        border: none;
        background-color: transparent;
    }
    
    @media (max-width: 1200px) {
        max-width: 100%;
    }
`

export default ProjectCard;